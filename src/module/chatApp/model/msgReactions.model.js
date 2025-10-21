import mongoose , {Schema} from "mongoose";

const msgReactionSchema = new Schema(
    {
        msgId : {
            type : Schema.Types.ObjectId,
            ref : "ChatMessages",
            required : true
        },
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        rectionType : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

export const MsgReaction = mongoose.model("MsgReaction",msgReactionSchema);