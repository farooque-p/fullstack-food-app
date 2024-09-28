import { User } from "../models/user.model.js";

// Add to Cart
export const addToCart = async (req, res) => {
  try {
    let userData = await User.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error adding item to cart" });
  }
};

// Remove Item from Cart
export const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    // Remove item from cart if quantity is 0
    if (cartData[req.body.itemId] === 0) {
      delete cartData[req.body.itemId];
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(201).json({
      success: true,
      message: "Item removed from cart.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "Error removing item from cart",
    });
  }
};

// Fetch User Cart
export const getCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching cart" });
  }
};
