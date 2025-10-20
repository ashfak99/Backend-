import mongoose,{Schema} from "mongoose";

const productSchema = new Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true,
            trim : true
        },
        summary : {
            type : string,
            trim : true
        },
        cover : {
            type : String,
            required : true
        },
        categori_id : {
            type : Schema.Types.ObjectId,
            ref : "SubCategories"
        }
    },
    {
        timestamps : true
    }
)

export const Product = mongoose.model("Product",productSchema);