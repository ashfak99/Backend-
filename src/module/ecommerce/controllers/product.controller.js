import {Product} from "../models/products.model.js";
import {asyncHandler} from "../../../utils/asyncHandler.js"
import {ApiError} from "../../../utils/ApiError.js"
import {ApiResponse} from "../../../utils/ApiResponse.js"
import {v2 as cloudinary} from "cloudinary"


//Only for Admin
const createProduct = asyncHandler(async(req , res)=>{
    const userId = req.user._id;
    const {name,description,summary} = req.body;
    
    if(!name || !description)
    {
        throw new ApiError(400,"Product name and description required")
    }

    const images = [].concat(req.body.cover || []) 

    const imageLink = []
    for(let i=0; i<images.length; i++)
    {
        const uploadImage = await cloudinary.uploader.upload(images[i],{
            folder : "Products"
        })

        imageLink.push({
            url : uploadImage.url,
            publicId : uploadImage.public_id
        })
    }

    const newProduct = await Product.create({
        name,
        description,
        cover : imageLink,
        summary : summary?.summary || "",
        owner : userId
    })

    if (!newProduct) {
        throw new ApiError(500,"Something went wrong while creating product");
    }

    res.status(201).json(
        new ApiResponse(201,newProduct,"Product created Successfully")
    )
})

const deleteProduct = asyncHandler(async (req , res)=>{

})
export {
    createProduct,
    deleteProduct
}