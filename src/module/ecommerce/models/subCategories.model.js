import mongoose , {Schema} from "mongoose";

const subCategoriesSchema = new Schema(
    {
        parent_id : {
            type : Schema.Types.ObjectId,
            ref : "Categories"
        },
        name : {
            type : String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    }
)

export const SubCategories = mongoose.model("SubCategories",subCategoriesSchema);