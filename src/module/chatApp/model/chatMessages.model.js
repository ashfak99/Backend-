import mongoose , {Schema} from "mongoose";

const chatMessageSchema = new Schema(
    {
        groupId : {
            type : Schema.Types.ObjectId,
            ref : "ChatGroup",
            required : true
        },
        senderId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        message : {
            type : String,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    }
)

export const ChatMessages = mongoose.model("ChatMessages",chatMessageSchema);