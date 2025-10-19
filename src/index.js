import app from './app.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB()
.then(()=>{
  app.on('error',(err)=>{
    console.error('Connection error',err);
    throw err;
  })
  app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.error('Failed to connect to the database',err);
  process.exit(1);
});