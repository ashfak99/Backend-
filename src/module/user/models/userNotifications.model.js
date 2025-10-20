import mongoose , {Schema}  from "mongoose";

const userNotificationSchema = new Schema(
    {
        emailNotification : {
            type: Boolean,
            required: true,
            default: true
        },
        pushNotification : {
            type: Boolean,
            required: true,
            default: true
        },
        messageNotification : {
            type: Boolean,
            required: true,
            default: false
        },
        userId:{
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
)

export const UserNotification = mongoose.model("UserNotification",userNotificationSchema)