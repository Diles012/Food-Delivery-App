import express from "express";
import { addFoodItem,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";

// Initialize router
const foodrouter = express.Router();

// Ensure uploads directory exists
import fs from "fs";
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Route to add a food item with an image upload
foodrouter.post("/add", upload.single("image"), addFoodItem);
foodrouter.get("/list",listFood);
foodrouter.post("/remove",removeFood);


export default foodrouter;
