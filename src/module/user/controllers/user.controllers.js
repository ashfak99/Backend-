import { asyncHandler } from "../../../utils/asyncHandler.js";
import {ApiError} from "../../../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from "../../../utils/ApiResponse.js";
import {uploadonClodinary} from "../../../utils/uploadOnClodinary.js"
import { secureHeapUsed } from "crypto";

const generateAccessAndRefreshToken = async (userId)=>{
    const user = await User.findById(userId);
    if(!user){
        throw new ApiError(404,"User not found");
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave : false});
    return {accessToken,refreshToken};
}

const createUser = asyncHandler(async (req , res)=>{
    const {username,email,password,fullName} = req.body;

    if(!username || !email || !password || !fullName){
        throw new ApiError(400,"All fields are required");
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
        throw new ApiError(409,"User already exists");
    }

    const avatarImage = req.files?.avatar[0]?.path || null;

    if (!avatarImage) {
        throw new ApiError(400,"Avatar is Required ");
    }

    const avatar = await uploadonClodinary(avatarImage);

    if(!avatar){
        throw new ApiError(500 , "Failed to upload avatar");
    }


    const user = await User.create({username,email,password,fullName,avatar:avatar.url});

    const createdUser = await User.findById(user._id).select('-password -__v -refreshToken -createdAt -updatedAt');

    if(!createdUser){
        throw new ApiError(500,"Something went wrong");
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,createdUser,"User created successfully")
    );
})

const loginUser = asyncHandler(async (req , res)=>{
    const {username,email,password} = req.body;

    if(!(username || email))
    {
        throw new ApiError(401,"Username or email required for login")
    }

    const user = await User.findOne({$or : [{username:username?.toLowerCase()},{email}]})

    if (!user) {
        throw new ApiError(404,"User not found")
    }

    const isPasswordValid = await user.isPasswordValid(password);

    if (!isPasswordValid) {
        throw new ApiError(401,"Password is incorrect")
    }

    const {accessToken,refreshToken}=await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly : true,
        secure : true
    }

    return res 
    .status(201)
    .cookie("refreshToken",refreshToken,options)
    .cookie("accessToken",accessToken,options)
    .json(
        new ApiResponse(201,{user : loggedInUser,accessToken,refreshToken},"Loggin Success")
    )
})

const logoutUser = asyncHandler(async(req , res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set : {
                refreshToken : undefined
            }
        },{
            new : true
        }
    )

    const option = {
        httpOnly : true,
        secure : true
    }

    return res
    .status(200)
    .clearCookie("accessToken",option)
    .clearCookie("refreshToken",option)
    .json(
        new ApiResponse(200,{},"User LoggedOut successfully")
    )

})

const getUserById = asyncHandler(async (req , res)=>{
    const user= req.user;

    const userDetail = await User.findById(user.id).select("-password -refreshToken");
    return res 
    .status(200)
    .json(
        new ApiResponse(200,{userDetail},"")
    )
})

const deleteUser = asyncHandler(async(req , res)=>{
    const user = req.user;
    await User.findByIdAndDelete(user._id);
    return res.json(
        new ApiResponse(200,{},"User deleted Successfully")
    )
})



export {
    createUser, 
    loginUser,
    logoutUser
};