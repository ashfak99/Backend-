import mongoose, {Schema} from "mongoose";

const cartSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        Total : {
            type : Number,
            default : 0
        }
    }
)

export const Cart = mongoose.model("Cart",cartSchema);