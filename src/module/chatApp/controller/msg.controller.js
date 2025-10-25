import { asyncHandler } from "../../../utils/asyncHandler";
import { MsgModel } from "../model/msg.model";
import {ApiError} from "../../../utils/ApiError.js"
import { Chatting } from "../model/chatting.model";

const sendMsg = asyncHandler(async (req , res)=>{
    const user = req.user;
    const senderId = user._id;
    const receiverId = req.params._id;
    const {message} = req.body;
    let gotChatting = await Chatting.findOne({
        participants : {$all : [senderId,receiverId]}
    });

    if (!gotChatting) {
        gotChatting = await Chatting.create({
            participants : [senderId,receiverId]
        })
    };

    const newMsg = await MsgModel.create({
        senderId,receiverId,message
    })

    if(newMsg){
        gotChatting.message.push(newMsg._id)
    }

    await gotChatting.save();
})

export {sendMsg};