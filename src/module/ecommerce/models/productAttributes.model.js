import mongoose , {Schema} from "mongoose";

const productAttributesSchema = new Schema(
    {
        Type : {
            type : String,
            required : true
        },
        value : {
            type : String,
            required : true
        }
    }
)

export const ProductAttributes = mongoose.model("ProductAttributes",productAttributesSchema);