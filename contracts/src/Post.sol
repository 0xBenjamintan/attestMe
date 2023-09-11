// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";

contract Post {
    // post creator contract address
    address public postCreatorAddress;

    modifier onlyPostCreator() {
        require(
            msg.sender == postCreatorAddress,
            "Only Sector Resolver can call this function"
        );
        _;
    }

    // Events
    event PostCreated(
        uint256 postId,
        string postTitle,
        address postCreator,
        string postContent,
        uint256 postPrice,
        uint256 postDate,
        string postDuration,
        bool postStatus
    );

    // Post structure
    struct PostStruct {
        uint256 postId;
        address postCreator;
        string postTitle;
        string postContent;
        uint256 postPrice;
        uint256 postDate;
        string postDuration;
        bool postStatus;
        address[] interestedFreelancers;
        address taskWinner;
    }

    using Counters for Counters.Counter;
    Counters.Counter private _postId;

    mapping(uint256 => PostStruct) private _idToPosts;
    mapping(address => uint256[]) private _userToPostIds;

    // Create post
    function createPost(
        string calldata _postTitle,
        string calldata _postContent,
        uint256 _postDate,
        uint256 _postPrice,
        string calldata _postDuration,
        bool _postStatus
    ) external {
        require(bytes(_postTitle).length > 0, "No Post Title!");
        require(bytes(_postContent).length > 0, "No Post Content!");
        require(_postPrice > 0, "No Price!");
        require(bytes(_postDuration).length > 0, "No Duration!");

        _postId.increment();
        uint256 postId = _postId.current();
        PostStruct storage post = _idToPosts[postId];

        post.postId = postId;
        post.postCreator = msg.sender;
        post.postTitle = _postTitle;
        post.postContent = _postContent;
        post.postPrice = _postPrice;
        post.postDate = _postDate;
        post.postDuration = _postDuration;

        _userToPostIds[msg.sender].push(postId);

        emit PostCreated(
            postId,
            _postTitle,
            msg.sender,
            _postContent,
            _postPrice,
            _postDate,
            _postDuration,
            _postStatus
        );
    }

    // the different between the two functions below is that the first one is use for querying a single post created by a single user,
    // while the second one is use for querying all the posts created by a single user
    // Get single post
    // this function is use for querying a single post in the storage
    function getPost(uint256 postId) external view returns (PostStruct memory) {
        require(postId <= _postId.current(), "Post does not exist");
        return _idToPosts[postId];
    }

    // Get all posts with pagination
    // this function is use for querying all the posts in the storage
    function getAllPosts() external view returns (PostStruct[] memory) {
        // calculate the length of the array, the amount of posts that will be returned
        uint256 length = _postId.current() - 1;
        PostStruct[] memory posts = new PostStruct[](length); // create a new array with the length of the amount of posts that will be returned

        for (uint256 i = 0; i < length; i++) {
            posts[i] = _idToPosts[i];
        }

        return posts;
    }

    // Get total number of posts by a user
    function getTotalPostsByUser(address user) external view returns (uint256) {
        return _userToPostIds[user].length;
    }

    // Get interested freelancers address
    function getInterestedFreelancers(
        uint256 postId
    ) external view returns (address[] memory) {
        require(postId <= _postId.current(), "Post does not exist");
        return _idToPosts[postId].interestedFreelancers;
    }

    function expressInterest(uint256 postId) external {
        require(postId <= _postId.current(), "Post does not exist");

        // Ensure that the freelancer has not already expressed interest
        PostStruct storage post = _idToPosts[postId];
        for (uint256 i = 0; i < post.interestedFreelancers.length; i++) {
            require(
                post.interestedFreelancers[i] != msg.sender,
                "Already expressed interest"
            );
        }

        // Add the freelancer's address to the interestedFreelancers array
        post.interestedFreelancers.push(msg.sender);

        // Emit an event to indicate that the freelancer has expressed interest
        emit InterestExpressed(postId, msg.sender);
    }

    // Event to indicate interest expressed
    event InterestExpressed(uint256 postId, address freelancer);

    // Set the task winner
    function setTaskWinner(
        uint256 postId,
        address winner
    ) external onlyPostCreator {
        require(postId <= _postId.current(), "Post does not exist");
        require(
            _idToPosts[postId].postStatus,
            "Task is not open for assignments"
        ); // Ensure that the post is open for assignments (postStatus is true)
        require(
            msg.sender == _idToPosts[postId].postCreator,
            "Only the post creator can assign a winner"
        ); // Ensure that the sender is the creator of the post
        require(
            _isInterestedFreelancer(postId, winner),
            "Winner is not an interested freelancer"
        ); // Ensure that the winner is one of the interested freelancers

        // Update the task winner
        _idToPosts[postId].taskWinner = winner;

        // Close the task by setting postStatus to false
        _idToPosts[postId].postStatus = false;

        // Emit an event to indicate the winner assignment
        emit TaskWinnerAssigned(postId, winner);
    }

    // Event to indicate the task winner assignment
    event TaskWinnerAssigned(uint256 postId, address winner);

    // Internal function to check if an address is an interested freelancer for a given post
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

    // Get the status of a post (live or closed)
    function getPostStatus(uint256 postId) external view returns (bool) {
        require(postId <= _postId.current(), "Post does not exist");
        return _idToPosts[postId].postStatus;
    }
}
