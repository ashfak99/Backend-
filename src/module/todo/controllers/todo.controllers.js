import {asyncHandler} from "../../../utils/asyncHandler.js"
import {ApiError} from "../../../utils/ApiError.js"
import {ApiResponse} from "../../../utils/ApiResponse.js"
import { Todo } from "../models/todos.model.js"

const createTodo = asyncHandler(async (req , res )=>{
    const {title ,  description } = req.body;
    const user=req.user;
    if(!title || !description)
    {
        throw new ApiError(401,"All fields are required")
    }
    const userId = user._id;
    Todo.create(
        {title,description,userId}
    )

    return res.json(
        new ApiResponse(201,"Todo created Successful")
    )
})

export {createTodo};