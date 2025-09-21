import express from 'express';
const app = express();
import cors from 'cors';
const Port = process.env.Port || 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.get('/', (req,res)=>{
    res.send('Hi from backend');
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json({message:"Hi there", time: req.body.hi});
    
});
app.listen( Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);
});