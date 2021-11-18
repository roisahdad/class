const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.get("/movies", async (req,res)=>{

    try{
            const response = await axios.get("https://swapi.dev/api/films");
            res.json({movies: response.data});

    }catch(error){
        console.log(error);
    }




})


mongoose.connect("mongodb://host.docker.internal:27017/films", {useNewUrlParser: true},(success)=>{
    console.log("Database connected successfully "+success);
})

app.listen(3000);

