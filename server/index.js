import express from "express"
import mongoose from "mongoose"
import  EmployeeModel  from "./models/EmployeeModel.js"
import cors from "cors"
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json())

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to the database")
    app.listen(3000,()=>{
        console.log("listening on port 3000")
    })
    
    
    
}
main()

app.post('/register',async(req,res)=>{
    const{name,email,password}=req.body;
    await EmployeeModel.create({
        name:name,
        email:email,
        password:password

    }).then(employee=>res.json(employee)).catch(e=>res.json(e))
    

})
