import { Food } from "../models/food.model.js";
import fs from "fs";

// Add Foot Item

export const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.status(200).json({ success: true, message: "Food Added.", food });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error while adding food." });
  }
};

// Get All Food
export const listFood = async (req, res) => {
  try {
    const foods = await Food.find({});

    res.status(200).json({
      success: true,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while getting all foods. ",
    });
  }
};

//  Get Single Food Item

export const getSingleFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food Item Not Found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food item fetched successfully.",
      food,
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CasteError") {
      return res.status(500).json({
        success: false,
        message: "Invalid Food ID!",
      });
    }
    res.status(500).json({
      success: false,
      message: "Error while getting single food item.",
    });
  }
};

// Remove Food Item

export const removeFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await Food.findById(foodId);
    fs.unlink(`uploads/${food.image}`, () => {});

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food Not Found!",
      });
    }

    await food.deleteOne();
    res.status(200).json({
      success: true,
      message: "Food delete successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while removing food item.",
    });
  }
};
