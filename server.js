const express = require('express')
const app = express();
const path = require("path");
const fs = require('fs')
const request = require('request')
const {PORT} = require('./config.js')
const {API_URL} = require("./config.js");

app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));  
})

function init(){

     request.get(
       {
         url: API_URL,
         json: true,
         headers: { "User-Agent": "request" },
       },
       (err, res, data) => {
         if (err) {
           console.log("Error : ", err);
         } else if (res.statusCode !== 200) {
           console.log("Status", res.statusCode);
         } else {
           const newData = JSON.stringify(data);
           fs.writeFile("frontend/static/js/pays.json", newData, (err) => {
             if (err) throw err;
             console.log("Création du fichier JSON");
           });
         }
       }
     );
}

init();
app.listen(PORT || 4001, () => {
    console.log('Server running on port', PORT)
})