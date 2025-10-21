import mongoose , {Schema} from "mongoose";

const groupMemberSchema = new Schema(
    {
        groupId : {
            type : Schema.Types.ObjectId,
            ref  : "ChatGroup",
            required : true
        },
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        role : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

export const GroupMember = mongoose.model("GroupMember",groupMemberSchema);