import mongoose , {Schema} from "mongoose";

const orderDetailsSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        paymentId : {
            type : Schema.Types.ObjectId,
            ref : 'PaymentDetails',
            required : true
        },
        total : {
            type : Number,
            required : true,
            default : 0
        }
    },
    {
        timestamps : true
    }
)

export const OrderDetails = mongoose.model("OrderDetails",orderDetailsSchema)