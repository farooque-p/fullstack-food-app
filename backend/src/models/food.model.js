import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    image: {
      type: String,
      required: [true, "Image is required."],
    },
    category: {
      type: String,
      required: [true, "Category is required."],
    },
  },
  { timestamps: true }
);

export const Food = mongoose.model("Food", foodSchema);
