import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";

{/*export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    (req).user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};


import jwt from "jsonwebtoken";
*/}

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    // Step 1: Verify token signature (integrity)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Step 2: Cross-check against database
    const user = await adminModel.findById(decoded.id);

    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.isDisabled) return res.status(403).json({ message: "Account disabled" });
    
    // Optional: check if roles still match
    if (decoded.isAdmin !== user.isAdmin ) {
      return res.status(403).json({ message: "Token role mismatch" });
    }

    if(user.isAdmin !== "true"){
      return res.status(403).json({ message: "You are not an admin and cannot access this page" });
    }

    // Attach verified user to request
    req.user = user;
    next();

  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
