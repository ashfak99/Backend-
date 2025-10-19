import {asyncHandler} from "../../../utils/asyncHandler.js"
import {ApiError} from "../../../utils/ApiError.js"
import {ApiResponse} from "../../../utils/ApiResponse.js"
import { Todo } from "../models/todos.model.js"

const createTodo = asyncHandler(async (req , res )=>{
    const {title ,  description } = req.body;

    if(!title || !description)
    {
        throw new ApiError(401,"All fields are required")
    }

    Todo.create(
        {title,description}
    )

    return res.json(
        new ApiResponse(201,"Todo created Successful")
    )
})

export {createTodo};