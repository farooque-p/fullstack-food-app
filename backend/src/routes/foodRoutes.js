import express from "express";
import {
  addFood,
  getSingleFood,
  listFood,
  removeFood,
} from "../controllers/food.controller.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// Routes

// Add Food Item
foodRouter.post("/add", upload.single("image"), addFood);

// Get All Foods
foodRouter.get("/list", listFood);

// Get Single Food Item
foodRouter.get("/:id", getSingleFood);

// Delete Food Item
foodRouter.delete("/delete/:id", removeFood);

export default foodRouter;
