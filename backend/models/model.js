import mongoose from "mongoose";

const expenseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    category:{
        type:{
             id:String,
             title:String,
             icon:String,
             color:String
        },
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
    }
});

//tabel or collection
const expenseCollection=new mongoose.model('expenseCollection',expenseSchema);

export default expenseCollection;