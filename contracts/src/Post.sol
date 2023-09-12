// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Import OpenZeppelin's Counters library for safely incrementing uint256
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Post is Ownable {
    using Counters for Counters.Counter; // Using Counters library for Counters.Counter type
    Counters.Counter private _postId; // Counter for generating unique post IDs
    address private resolverAddressJobDone; // Address of the Sector Resolver contract
    address private resolverAddressPayoutDone; // Address of the Sector Resolver contract

    // Modifiers

    // Ensure only the creator of a specific post can call certain functions
    modifier onlyPostCreator(uint256 _postId) {
        require(
            msg.sender == _idToPosts[_postId].postCreator,
            "Only Post Creator can call this function"
        );
        _;
    }

    // Ensure only a freelancer (not the post creator) can call certain functions
    modifier onlyFreelancer(uint256 _postId) {
        require(
            msg.sender != _idToPosts[_postId].postCreator,
            "Only Freelancer can call this function"
        );
        _;
    }

    modifier onlyResolverAddressJobDone() {
        require(
            msg.sender == resolverAddressJobDone,
            "Only Sector Resolver can call this function"
        );
        _;
    }

    modifier onlyResolverAddressPayoutDone() {
        require(
            msg.sender == resolverAddressPayoutDone,
            "Only Sector Resolver can call this function"
        );
        _;
    }

    // Events

    // Event emitted when a new post is created
    event PostCreated(
        uint256 indexed postId,
        address indexed postCreator,
        uint256 postDate
    );

    // Event emitted when a freelancer expresses interest in a post
    event InterestExpressed(uint256 indexed postId, address indexed freelancer);

    // Event emitted when a task winner is set
    event TaskWinnerAssigned(uint256 indexed postId, address indexed winner);

    // Structs

    // Struct for storing post information
    struct PostStruct {
        uint256 postId;
        address postCreator;
        string postTitle;
        string postContent;
        uint256 postPrice;
        uint256 postDate;
        string postDuration;
        bool postStatus; // true = live, false = closed
        address[] interestedFreelancers; // Freelancers who are interested
        address taskWinner; // Address of the freelancer who wins the task
        bool jobComplete;
        bool payoutComplete;
    }

    // Mappings

    // Mapping from post ID to PostStruct
    mapping(uint256 => PostStruct) private _idToPosts;

    // Mapping from user address to list of post IDs created by them
    mapping(address => uint256[]) private _userToPostIds;

    // Create a new post
    function createPost(
        string calldata _postTitle,
        string calldata _postContent,
        uint256 _postPrice,
        string calldata _postDuration
    ) external {
        // Validation: Ensure all the required fields are filled
        require(bytes(_postTitle).length > 0, "No Post Title!");
        require(bytes(_postContent).length > 0, "No Post Content!");
        require(_postPrice > 0, "No Price!");
        require(bytes(_postDuration).length > 0, "No Duration!");

        // Generate a new post ID and increment the counter
        _postId.increment();
        uint256 postId = _postId.current();

        // Store the post information in storage
        PostStruct storage post = _idToPosts[postId];
        post.postId = postId;
        post.postCreator = msg.sender;
        post.postTitle = _postTitle;
        post.postContent = _postContent;
        post.postPrice = _postPrice;
        post.postDate = block.timestamp; // Set the post date to the current block timestamp
        post.postDuration = _postDuration;
        post.postStatus = true; // Set the post status to live
        post.jobComplete = false;
        post.payoutComplete = false;

        // Add the post ID to the list of posts created by the sender
        _userToPostIds[msg.sender].push(postId);

        // Emit a PostCreated event
        emit PostCreated(postId, msg.sender, block.timestamp);
    }

    // Get a single post by ID
    function getPost(uint256 postId) external view returns (PostStruct memory) {
        // Validation: Ensure the post ID is valid
        require(
            postId <= _postId.current() && postId > 0,
            "Post does not exist"
        );
        return _idToPosts[postId];
    }

    // Get all posts
    function getAllPosts() external view returns (PostStruct[] memory) {
        uint256 length = _postId.current();
        // Create a new array to hold the posts
        PostStruct[] memory posts = new PostStruct[](length);

        // Loop through all the posts and add them to the array
        for (uint256 i = 1; i <= length; i++) {
            posts[i - 1] = _idToPosts[i];
        }

        return posts;
    }

    // Get the total number of posts created by a specific user
    function getTotalPostsByUser(address user) external view returns (uint256) {
        return _userToPostIds[user].length;
    }

    // Get the list of freelancers interested in a specific post
    function getInterestedFreelancers(
        uint256 postId
    ) external view onlyPostCreator(postId) returns (address[] memory) {
        return _idToPosts[postId].interestedFreelancers;
    }

    // Express interest in a post as a freelancer
    function expressInterest(uint256 postId) external onlyFreelancer(postId) {
        // Validation: Ensure the freelancer hasn't already expressed interest
        for (
            uint256 i = 0;
            i < _idToPosts[postId].interestedFreelancers.length;
            i++
        ) {
            require(
                _idToPosts[postId].interestedFreelancers[i] != msg.sender,
                "Already expressed interest"
            );
        }
        // Add the freelancer to the list of interested freelancers
        _idToPosts[postId].interestedFreelancers.push(msg.sender);

        // Emit an InterestExpressed event
        emit InterestExpressed(postId, msg.sender);
    }

    // Set the task winner for a post
    function setTaskWinner(
        uint256 postId,
        address winner
    ) external onlyPostCreator(postId) {
        // Validation: Ensure the post is still open for assignments
        require(
            _idToPosts[postId].postStatus,
            "Task is not open for assignments"
        );

        // Validation: Ensure the winner is an interested freelancer
        require(
            _isInterestedFreelancer(postId, winner),
            "Winner is not an interested freelancer"
        );

        // Set the task winner and close the task
        _idToPosts[postId].taskWinner = winner;
        _idToPosts[postId].postStatus = false;

        // Emit a TaskWinnerAssigned event
        emit TaskWinnerAssigned(postId, winner);
    }

    // Internal function to check if an address is an interested freelancer for a post
    function _isInterestedFreelancer(
        uint256 postId,
        address freelancer
    ) internal view returns (bool) {
        PostStruct storage post = _idToPosts[postId];
        for (uint256 i = 0; i < post.interestedFreelancers.length; i++) {
            if (post.interestedFreelancers[i] == freelancer) {
                return true;
            }
        }
        return false;
    }

    // Get the status of a post (true = live, false = closed)
    function getPostStatus(uint256 postId) external view returns (bool) {
        // Validation: Ensure the post ID is valid
        require(
            postId <= _postId.current() && postId > 0,
            "Post does not exist"
        );
        return _idToPosts[postId].postStatus;
    }

    function updateJobComplete(
        uint256 postId
    ) external onlyResolverAddressJobDone {
        _idToPosts[postId].jobComplete = true;
    }

    function updatePayoutComplete(
        uint256 postId
    ) external onlyResolverAddressPayoutDone {
        _idToPosts[postId].payoutComplete = true;
    }

    function setResolverAddressJobDone(
        address _resolverAddressJobDone
    ) external onlyOwner {
        resolverAddressJobDone = _resolverAddressJobDone;
    }

    function setResolverAddressPayoutDone(
        address _resolverAddressPayoutDone
    ) external onlyOwner {
        resolverAddressPayoutDone = _resolverAddressPayoutDone;
    }
}
