const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Add to Cart
router.post("/:userId", async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const user = await User.findById(req.params.userId);
    const cartItem = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove from Cart
router.delete("/:userId/:productId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.cart = user.cart.filter(
      (item) => item.productId.toString() !== req.params.productId
    );
    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User Cart
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "cart.productId"
    );
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
