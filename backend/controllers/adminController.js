import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";


export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const getUserData = async (req, res) => {
  try {
    const user = await adminModel.findById((req).user.id);
    res.json(user);
  } catch {
    res.status(500).json({ message: "Error fetching user" });
  }
};
