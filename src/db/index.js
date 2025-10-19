import mongoose from 'mongoose';
import { DB_NAME } from '../constraints.js';

const connectDB = async ()=>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`DB connection Successful at : ${connectionInstance.connection.port}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;