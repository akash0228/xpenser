import mongoose from "mongoose";

const connection=()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/Expenses",{useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log("Database connected");
    })

    mongoose.connection.on('diconnected',()=>{
        console.log("Database disconnected");
     })

     mongoose.connection.on('error',()=>{
        console.log('Error while connecting with database');
     })
}

export default connection;