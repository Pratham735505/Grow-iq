import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import authrouter from './routes/authRoutes.js';
import connectDB from './config/mongodb.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import adminRouter from './routes/adminRoutes.js';

connectDB();

const Port = process.env.Port || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(passport.initialize());
app.use(cookieParser());

app.use("/api/admin",adminRouter);
app.use('/api/auth',authrouter);
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json({message:"Hi there", time: req.body.hi});
    
});


app.listen( Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);
});