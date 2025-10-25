import mongoose, {Schema} from "mongoose"

const msgSchema = new Schema(
    {
        senderId : {
            type : Schema.Types.ObjectId,
            ref  : "User"
        },
        receiverId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        message : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

export const MsgModel = mongoose.model("MsgModel",msgSchema);