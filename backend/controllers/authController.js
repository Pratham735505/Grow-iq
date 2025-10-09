import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import transporter from '../config/nodemailer.js';
export const register = async (req,res) =>{


    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.json({success : false, message : 'Missing Details'});
    }

    try {
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            res.json({success:false, message : "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new userModel({name , email , password: hashedPassword});

        await user.save();
        
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET ,{expiresIn: '7d'});
        res.cookie('token',token,{
            httpOnly : true,
            secure: process.env.NODE_ENV=== 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 7*24*60*60*1000
        });
        

        // sending email

        const mailOptions = {
            from : process.env.SENDER_EMAIL,
            to : email,
            subject : "Welcome to grow-iq",
            text: 'Your account has been created',
            //html : welcome.html,
        }


        await transporter.sendMail(mailOptions);
        res.json({success:true});

    } catch (error){
        res.json({success:false , message : error.message});
    }
}


export const login = async ( req,res)=>{
        const {email, password} = req.body;
        if(!email || !password){
            res.json({success:false,message :'Email and password are required'});
        }

        try {
            const user = await userModel.findOne({email});
            if(!user){
                return res.json({success:false, message:'Inavlid email'});
            }

            const isMatch = await bcrypt.compare(password,user.password);


            if(!isMatch){
                res.json({success:false, message: 'Invalid password'});
            }

              const token = jwt.sign({id: user._id},process.env.JWT_SECRET ,{expiresIn: '7d'});
        res.cookie('token',token,{
            httpOnly : true,
            secure: process.env.NODE_ENV=== 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 7*24*60*60*1000
        });
        res.json({success:true});

        }   
        catch (error){
            return res.json({success: false, message:error.message});
        }
}



export const logout = async (req,res) =>{
    try {
    res.clearCookie('token',token,{
            httpOnly : true,
            secure: process.env.NODE_ENV=== 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        res.json({success:true , message:'User Logged out'});
       

    } catch(error){
        return res.json({success: false, message:error.message});
    }
}





export const sendVerifyOtp = async (req,res)=>{
    const {userId} = req.body;
    try {
        const user = await userModel.findById(userId);
    }
    catch (error){
        res.json({success:false, message:error.message});
    }
}