const express = require("express");
const app = express();

app.use(express.static("asset"));


app.get("/",(req,res)=>{
        res.send(`
            <html>
                <head>
                    <link rel="stylesheet" href="style.css" />
                </head>

                <body>
                    <h1>WELCOME TO DOCKER</h1>
                    <div>Sub Text for Docker</div>
                </body>
            </html>
        `)
})

app.listen(3000);
