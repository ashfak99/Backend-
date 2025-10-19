import mongoose , {mongo, Schema} from "mongoose";

const userProfileSchema = new Schema(
    {
        Description : {
            type : String,
            trim : true
        },
        Location : {
            type : String,
            trim : true
        },
        Website : {
            type : String
        },
        BirthDate : {
            type : Date,
            required : true
        },
        UserId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
)

export const userProfile = mongoose.model("userProfile",userProfileSchema)