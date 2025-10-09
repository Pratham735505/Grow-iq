import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model("Admin", userSchema);
