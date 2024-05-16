import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";


const port=3000;

const app= express();

app.get("/",(req,res)=>{
    res.sendFile("<h1>Hello</h1>");
});


app.listen(port,()=>{
    console.log("Server running on port "+port);
});