import express from "express"
import mongoose from "mongoose"
import  EmployeeModel  from "./models/EmployeeModel.js"
import cors from "cors"
import dotenv from 'dotenv';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

dotenv.config();

const app=express();

app.use(cors({
    origin:['http://localhost:5173'],
    method:["GET","POST"],
    credentials:true
}));


app.use(cookieParser())



app.use(express.json())

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to the database")
    app.listen(3000,()=>{
        console.log("listening on port 3000")
    })
    
    
    
}
main()
const verifyUser=(req,res,next)=>{
    const token=req.cookies.token;
    console.log(token)
    if(!token){
        return res.json("the token was not available")
    }
    else{
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err) return res.json("token is wrong")
            next();
        })
    }
}
app.get('/home',verifyUser,(req,res)=>{
    return res.json("success")
    
    

})
app.post('/register',async(req,res)=>{
    const{name,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,4)
    

    await EmployeeModel.create({
        name:name,
        email:email,
        password:hashedPassword

    }).then(employee=>res.json(employee)).catch(e=>res.json(e))
    

})
app.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try {
        // Find user by email
        const user = await EmployeeModel.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'Invalid email or password' });
        }
    
        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        if(user&&passwordMatch){
            const token=jwt.sign({
                email:email
            },process.env.JWT_SECRET)
            res.cookie("token",token)

                
        
            res.status(200).send("success")
                
        }
    
    
    }   
    catch(e){
        res.json(e)
    }
     
})