import mongoose , {Schema} from "mongoose";

const chatGroupSchema = new Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    }
)

export const ChatGroup = mongoose.model("ChatGroup",chatGroupSchema);