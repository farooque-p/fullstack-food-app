import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

export const User = mongoose.models.user || mongoose.model("User", userSchema);
