import mongoose,{Schema,Model} from "mongoose";


const employeeSchema=new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const EmployeeModel=mongoose.model("Employee",employeeSchema)
export default EmployeeModel
