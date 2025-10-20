import mongoose , {Schema} from "mongoose";

const paymentDetailsSchema = new Schema(
    {
        orderId : {
            type : Schema.Types.ObjectId,
            ref : "OrderDetails",
            required : true
        },
        amount : {
            type : Number,
            default : 0,
            required : true
        },
        provider : {
            type : String,
            required : true
        },
        status : {
            tyep : String,
            required : true,
            enum : ['pending','succeeded','failed','refunded','processing'],
            default : 'pending'
        }
    },
    {
        timestamps : true
    }
)

export const PaymentDetails = mongoose.model("PaymentDetails",paymentDetailsSchema)