const express = require("express")
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs").promises;


app.use(bodyParser.urlencoded({extended: false}));

app.use("/assets", express.static("assets"));

app.get("/",(req,res)=>{

        let file = path.join(__dirname+"/template/index.html");
        res.sendFile(file)

})

app.post("/generate",async (req,res)=>{

    const title = req.body.title;
    const fullpath = path.join(__dirname,"/assets/"+title+".txt");
    console.log(fs);
    await fs.writeFile(fullpath,"My data is "+title);

    res.redirect("/");
})

app.listen(3000);