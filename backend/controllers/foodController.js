import FoodModel from "../models/foodModel.js";
import fs from "fs";


// add food item

const addFoodItem = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new FoodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })
    try {
        await food.save();
        res.json({success:true,message:"Food item added successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Failed to add food"})
        
        
    }

}

// all food list
const listFood = async (req, res) => {
    try {
        const food = await FoodModel.find({});
        res.json({success:true,foods:food})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Failed to fetch food"})
        
    }

}

// remove fooditem
const removeFood = async (req, res) => {

    try {
        const food = await FoodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        
        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food item deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Failed to delete food item"})
        
    }

}

export {addFoodItem,listFood,removeFood}