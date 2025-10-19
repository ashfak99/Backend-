import mongoose , {Schema} from "mongoose";

const followRelationSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        followedUserId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    },
    {
        timestamps : true
    }
)

export const FollowRelation = mongoose.model("FollowRelation",followRelationSchema)