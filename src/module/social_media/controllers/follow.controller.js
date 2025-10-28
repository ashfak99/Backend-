import {asyncHandler} from "../../../utils/asyncHandler.js"
import {User} from "../../user/models/user.model.js"
import {ApiError} from "../../../utils/ApiError.js"
import {ApiResponse} from "../../../utils/ApiResponse.js"
import {FollowRelation} from "../models/followingRelationship.model.js"


const follow = asyncHandler(async (req , res)=>{
    const followerId = req.user._id;
    const followingId = req.params._id;

    if (followerId.toString()===followingId.toString()) {
        throw new ApiError(403,"Forbidden Error")
    }

    const following = await User.findById(followingId);

    if(!following)
    {
        throw new ApiError(404,"User not found!")
    }

    const existedFollow = await FollowRelation.findOne(
        {
            userId : followerId,
            followedUserId : followingId
        }
    )

    if (existedFollow) {
        throw new ApiError(400,"You already follow this user")
    }

    await FollowRelation.create({
        userId : followerId,
        followedUserId : followingId
    })

    res.json(
        new ApiResponse(200,{},"Follow Successfylly")
    )
})

const unfollow = asyncHandler(async(req , res)=>{
    const followerId = req.user._id;
    const followedId = req.params._id;

    if (followedId.toString()===followerId.toString()) {
        throw new ApiError(403,"Forbidden")
    }

    const followed = await User.findById(followedId);

    if(!followed)
    {
        throw new ApiError(404,"User not found!")
    }

    const unFollow = await FollowRelation.findOneAndDelete(
        {
            userId : followerId,
            followedUserId : followedId
        }
    )

    if (!unFollow) {
        throw new ApiError(400,"You don't follow this user")
    }

    res.json(
        new ApiResponse(200,{},"Unfollow successful")
    )
})

export {
    follow,
    unfollow
}