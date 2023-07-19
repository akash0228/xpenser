import express from "express";
// earlier we needed to require
import connection from "./db/conn.js";
import cors from 'cors';
import route from "./routes/routes.js";
import { config } from "dotenv";
config({path:'./development/.env'});




const app=express();

const PORT=process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',route);

connection();

app.listen(PORT,()=>{
    console.log(`Server is Running SUccessfully on port ${PORT}`);
});

