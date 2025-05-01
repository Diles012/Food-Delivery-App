import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://dileswarpradhan012:LwRinQLb9t01Yf7i@cluster0.wbmyl.mongodb.net/Food-Delivery').then(()=>console.log("DB connected"));
    
}