import mongoose , {Schema} from "mongoose";

const msgAttachmentSchema = new Schema(
    {
        msgId : {
            type : Schema.Types.ObjectId,
            ref : "ChatMessages",
            required : true
        },
        fileUrl : {
            type : String,
            required : true
        },
        fileType : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

export const MsgAttachment = mongoose.model("MsgAttachment",msgAttachmentSchema);