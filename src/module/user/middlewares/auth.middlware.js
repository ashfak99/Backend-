import {asyncHandler} from "../../../utils/asyncHandler.js"
import {ApiError} from "../../../utils/ApiError.js"
import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js"

export const verifyJWT = asyncHandler(async (req , _ , next)=>{
    try {
        const token = req.body || req.header("Authorization").replace("Bearer ","");
    
        if (!token) {
            throw new ApiError(402,"You are not authorized to access this routes")
        }
    
        const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodeToken._id).select("-password");
    
        if(!user)
        {
            throw new ApiError(404 , "USER not found")
    
        }
    
        req.user=user;
        next();
    } catch (error) {
            throw new ApiError(401,"You are not authorized to access this routes")
    }
})
