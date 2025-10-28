import {Tweet} from "../models/tweet.model.js"
import {asyncHandler} from "../../../utils/asyncHandler.js"
import {ApiError} from "../../../utils/ApiError.js"
import {ApiResponse} from "../../../utils/ApiResponse.js"
import {PostLike} from "../models/postLikes.model.js"

const createTweet = asyncHandler(async(req , res)=>{
    const userId = req.user._id;
    const {text} = req.body;

    if (!text || text.trim() === "") {
        throw new ApiError(400,"Tweet field is required")
    }

    const newTweet = await Tweet.create(
        {
            userId : userId,
            text 
        }
    )

    if (!newTweet) {
        throw new ApiError(500,"Something went wrong while creating Tweet")
    }

    res.json(
        new ApiResponse(201,newTweet,"Tweet Post Successfully")
    )
})

const getTweet = asyncHandler(async(req , res)=>{
    const tweetId = req.params._id;

    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
        throw new ApiError(404,"Tweet not Found")
    }

    res.json(
        new ApiResponse(200,tweet,"Success")
    )
})

const replyByTweet = asyncHandler(async(req,res)=>{
    const tweetId = req.params._id;
    const userId = req.user._id;
    const {text} = req.body;

    if (!text || text.trim() === "") {
        throw new ApiError(400,"Tweet field is required")
    }

    const oldTweet = await Tweet.findById(tweetId)

    if (!oldTweet) {
        throw new ApiError(404,"Old Tweet not found")
    }

    const replyTweet = await Tweet.create({
        userId : userId,
        text ,
        InReplyToTweetId : oldTweet._id,
        InReplyToUserId : oldTweet.userId
    })

    if (!replyTweet) {
        throw new ApiError(500,"Something went wrong while replying tweet")
    }

    res.json(
        new ApiResponse(201,replyTweet,"Reply successful")
    )
    
})

const likeTweet = asyncHandler(async(req , res)=>{
    const userId = req.user._id;
    const tweetid = req.params._id;

    const isTweetExisted = await Tweet.findById(tweetid);

    if (!isTweetExisted) {
        throw new ApiError(404,"Tweet not found")
    }

    const existedLike = await PostLike.findOne({
        userId : userId,
        tweetId : tweetid
    })

    if (existedLike) {
        const disLike = await PostLike.findByIdAndDelete(existedLike._id)

        res.json(new ApiResponse(200,{},"Tweet Unlike"))
    }
    else{

    await PostLike.create({
        userId : userId,
        tweetId : tweetid
    })

    res.json(
        new ApiResponse(201,{},"Tweet Liked")
    )}
})

export {
    createTweet,
    getTweet,
    replyByTweet,
    likeTweet
}