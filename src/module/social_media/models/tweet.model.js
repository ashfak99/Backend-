import mongoose , {Schema} from "mongoose";

const tweetSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        text : {
            type : String,
            required : true,
            trim : true
        },
        InReplyToTweetId : {
            type : Schema.Types.ObjectId,
            ref : "Tweet"
        },
        InReplyToUserId : {
            type : Schema.Types.ObjectId,
            ref : "User",
        },
        retweet_count : {
            type : Number,
            default : 0
        },
        language : {
            type : String
        },
        country : {
            type : String
        }
    },
    {
        timestamps : true
    }
)

export const Tweet = mongoose.model("Tweet",tweetSchema);