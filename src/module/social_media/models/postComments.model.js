import mongoose , {Schema} from "mongoose";

const commentSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        comment : {
            type : String,
            required : true,
            trim : true
        },
        tweetId : {
            type : Schema.Types.ObjectId,
            ref : "Tweet"
        }
    },
    {
        timestamps : true
    }
)

export const CommentSchema = mongoose.model("CommentSchema",commentSchema)