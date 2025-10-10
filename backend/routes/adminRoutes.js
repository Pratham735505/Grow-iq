import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import adminModel from "../models/adminModel.js";
import { generateToken } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/adminMiddleware.js";
import dotenv from "dotenv";
dotenv.config();
const adminRouter = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_, __, profile, done) => {
      try {
        
        const user = await adminModel.findOneAndUpdate(
          { googleId: profile.id },
          { name: profile.displayName, email: profile.emails?.[0].value },
          { upsert: true, new: true }
        );
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

adminRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

adminRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`${process.env.FRONTEND_URL}/admin/login?token=${token}`);
  }
);

adminRouter.get("/user", verifyToken, async (req, res) => {
  try {
    const user = await adminModel.findById(req.user.id);
    res.json({
      name: user.name,
      class: "10th Grade", // example static data
      studentId: "STU12345",
      subjects: ["Mathematics","Physics","Chemistry","English","Biology"]
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
});

export default adminRouter;
