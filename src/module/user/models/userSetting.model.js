import mongoose , {Schema} from "mongoose";

const userSettingSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        language : {
            type : String,
            required : true
        }
    }
)

export const UserSetting = mongoose.model("UserSetting",userSettingSchema)