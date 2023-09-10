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
        bool postStatus,
        address[] interestedFreelancers,
        address taskWinner
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

    // Create post
    function createPost(
        string calldata _postContent,
        uint256 _postDate,
        string calldata _postCreator,
        uint256 _postPrice,
        string calldata _postDuration,
        bool _postStatus,
        address[] calldata _interestedFreelancers,
        address _taskWinner
    ) external {
        require(bytes(_postTitle).length > 0, "No Post Title!");
        require(bytes(_postContent).length > 0, "No Post Content!");
        require(bytes(_postPrice).length > 0, "No Price!");
        require(bytes(_postDuration).length > 0, "No Duration!");

        _postId.increment();
        uint256 postId = _postId.current();
        PostStruct storage post = idToPosts[postId]; 
        // when you create a new post, it will be stored in this variable, 
        //the post will be stored in the mapping with the key postId and the value will be the postStruct
        
        // below is the postStruct that will be stored in the storage
        post.postId = postId;
        post.postCreator = msg.sender;
        post.postTitle = _postTitle;
        post.postContent = _postContent;
        post.postPrice = _postPrice;
        post.postDate = postDate;
        post.postDuration = _postDuration;

        userToPostIds[msg.sender].push(postId);

        emit PostCreated(
            postId,
            msg.sender,
            _postTitle,
            _postContent,
            _postPrice,
            _postDate,
            _postDuration
        );
    }

// the different between the two functions below is that the first one is use for querying a single post created by a single user, 
// while the second one is use for querying all the posts created by a single user
    // Get single post
    // this function is use for querying a single post in the storage
    function getPost(uint256 postId) external view returns (PostStruct[] memory) {
        require(postId <= _postId.current(), "Post does not exist");
        return idToPosts[postId];
    }

    // Get all posts with pagination
    // this function is use for querying all the posts in the storage
    function getAllPosts(
        uint256 start,
        uint256 end
    ) external view returns (PostStruct[] memory) {
        uint256 lastPostId = _postId.current();
        require(
            start <= end && end <= lastPostId,
            "Invalid start or end values"
        );
        // calculate the length of the array, the amount of posts that will be returned
        uint256 length = end - start + 1;
        PostStruct[] memory posts = new PostStruct[](length); // create a new array with the length of the amount of posts that will be returned

        for (uint256 i = 0; i < length; i++) {
            posts[i] = idToPosts[start + i];
        }

        return posts;
    }

    // Get total number of posts by a user
    function getTotalPostsByUser(address user) external view returns (uint256) {
        return userToPostIds[user].length;
    }

    // Function to update attestation count in post
    function updateAttestCount(uint256 postId) external onlySectorResolver {
        require(postId <= _postIds.current(), "Post does not exist");
        idToPosts[postId].postAttestCount++;
        emit PostAttestCountUpdated(
            postId,
            idToPosts[postId].postAttestCount,
            tx.origin
        );
    }

    function updateInterestedFreelancers

    // Get the last used post ID
    function getLastPostId() external view returns (uint256) {
        return _postIds.current();
    }
}
