import mongoose , {Schema} from "mongoose";

const productSkusSchema = new Schema(
    {
        productId : {
            type : Schema.Types.ObjectId,
            ref : "Product",
            required : true
        },
        sizeAttributesId : {
            type : Schema.Types.ObjectId,
            ref : "ProductAttributes",
            required : true
        },
        colorAttributesId : {
            type : Schema.Types.ObjectId,
            ref : "ProductAttributes",
            required : true
        },
        sku : {
            type : Number,
            required : true,
            default : 0
        },
        price : {
            type : Number,
            required : true,
            default : 0
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

export const ProductSkus = mongoose.model("ProductSkus",productSkusSchema);