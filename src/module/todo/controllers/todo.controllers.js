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

const deleteTodo = asyncHandler(async(req , res)=>{
    const userId= req.user._id;
    const todoId=req.params._id;

    const todoItem=await Todo.findOne({_id:todoId});

    if (!todoItem) {
        throw new ApiError(404,"Todo not exits");
    }

    if (todoItem.userId.toString()!==userId.toString()) {
        throw new ApiError(400,"You are not authorized to access this")
    }
    await Todo.findByIdAndDelete(todoId);

    return res.json(
        new ApiResponse(200,{},"Todo Delete Successfully")
    )
})

export {
    createTodo,
    deleteTodo
};