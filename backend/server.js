import e from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodrouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



//app config
const app = e()
const port = process.env.PORT || 4000

//middleware
app.use(e.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodrouter);
app.use("/images",e.static("uploads"))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://dileswarpradhan012:Dileswar@0123@cluster0.wbmyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0