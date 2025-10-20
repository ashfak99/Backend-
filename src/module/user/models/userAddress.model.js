import mongoose, { Schema} from "mongoose";

const userAddressSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        title : {
            type : String,
            required : true
        },
        address1 : {
            type : String,
            trim : true
        },
        address2 : {
            type : String,
            trim : true
        },
        city : {
            type : String,
            trim : true
        },
        landmark : {
            type : String,
            trim : true
        },
        country : {
            type : String,
            trim : true
        },
        postalCode : {
            type : Number,
            required : true
        },
        phoneNumber : {
            type : Number,
            required : true
        }
    }
)

export const UserAddress = mongoose.model("UserAddress",userAddressSchema)