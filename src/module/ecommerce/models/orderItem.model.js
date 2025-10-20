import mongoose , {Schema} from "mongoose";

const orderItemSchema = new Schema(
    {
        orderId : {
            type : Schema.Types.ObjectId,
            ref : "OrderDetails",
            required : true
        },
        productId : {
            type : Schema.Types.ObjectId,
            ref : "Product",
            required : true
        },
        productSkusId : {
            type : Schema.Types.ObjectId,
            ref : "ProductSkus",
            required : true
        },
        quantity : {
            type : Number,
            required : true,
            default : 0
        }
    },
    {
        timestamps : true
    }
)

export const OrderItem = mongoose.model("OrderItem",orderItemSchema);