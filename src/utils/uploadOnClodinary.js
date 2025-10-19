import {v2 as cloudinary} from "cloudinary";
import fs from "fs"
import dotenv from "dotenv"

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const uploadonClodinary = async(filepath)=>{
    try {

        if (!filepath) return ()=>console.log("File path is Requires");
        const response = await cloudinary.uploader.upload(filepath,{
            resource_type : "auto"
        })
        console.log("File Uploaded Successfully ", response.url)
        return response;
        
    } catch (error) {
        if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
        }
        return null;
    }
}

export {uploadonClodinary};