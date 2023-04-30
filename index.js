

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express()

const dirpath = path.join((__dirname),"timestamps")
console.log("dirpath",dirpath)


app.use(express.static("timestamps"))

app.get("/static",(req,res)=>{

    let time = new Date();
    let dateString = time.toUTCString().slice(0,-4)
    console.log(dateString);
    let timeStamp = `current time is : ${dateString}`

    fs.writeFileSync(`${dirpath}/date-time.txt`,timeStamp,(err)=>{
        console.log("file created");
    })
    

res.sendFile(path.join(__dirname,"timestamps/date-time.txt"))
})



app.listen(9000,()=>console.log("localhost:9000 is started"))

// www.render.com deployed url is   ''https://date-time-task.onrender.com''