import mongoose , {Schema} from "mongoose";

const cartItemSchema = new Schema(
    {
        cartId : {
            type : Schema.Types.ObjectId,
            ref : "Cart",
            required : true
        },
        productId : {
            type : Schema.Types.ObjectId,
            ref : "Product",
            required : true
        },
        productSkusId : {
            type : Schema.Types.ObjectId,
            ref : "ProductSkus"
        },
        quantity : {
            type : Number,
            default : 0
        }
    }
)

export const CartItem = mongoose.model("CartItem",cartItemSchema);