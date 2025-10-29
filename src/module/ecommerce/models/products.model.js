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
        cover : [
            {
                url : {
                    type : String,
                    required : true
                },
                publicId : {
                    type : String,
                    required : true
                }
            }
        ],
        categori_id : {
            type : Schema.Types.ObjectId,
            ref : "SubCategories"
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    },
    {
        timestamps : true
    }
)

export const Product = mongoose.model("Product",productSchema);