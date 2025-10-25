import mongoose , {Schema} from "mongoose";

const chatSchema = new Schema(
    {
        participants : [
            {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        msg : [
            {
                type : Schema.Types.ObjectId,
                ref : "MsgModel"
            }
        ]
    },
    {
        timestamps : true
    }
)

export const Chatting = mongoose.model("Chatting",chatSchema)