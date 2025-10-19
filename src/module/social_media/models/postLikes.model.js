import mongoose , {Schema} from "mongoose";

const postLikesSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        tweetId : {
            type : Schema.Types.ObjectId,
            ref : "Tweet",
            required : true
        }
    },
    {
        timestamps : true
    }
)

postLikesSchema.index({ userId: 1, tweetId: 1 }, { unique: true });

export const PostLike = mongoose.model("PostLike",postLikesSchema)