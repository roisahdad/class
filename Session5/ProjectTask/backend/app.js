const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Goal = require("./models/goal");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    next();
    
});

app.get("/goals", async(req,res)=>{

    const goals = await Goal.find({});

    res.status(200).json({
        goals: goals.map((goal)=>({
                id: goal.id,
                text: goal.text
        })),
    });
    console.log("Goals listed");
});


app.post("/goals", async(req,res)=>{


    const goal = new Goal({
        text: req.body.text
    });

    await goal.save();
    res.status(200).json({
        message:"Goal created",
        goal: {id: goal.id, text: goal.text}
    });
    console.log("Goal Created Successfully");

})
console.log(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/course-goals?authSource=admin`);
mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/course-goals?authSource=admin`,{
    useNewUrlParser: true, useUnifiedTopology: true
},
(err)=>{

    if(err){
        console.error("FAILED TO CONNECT DATABASE")
        console.error(err);
    }
    else{
        console.log("CONNECTED TO MONGODB")
        app.listen(2000);
    }



})