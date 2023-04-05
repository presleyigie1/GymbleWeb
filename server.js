//allows the creation of a server
const express = require("express");
//path allows us to know our html and css file location
const path = require("path");
//boy parser allows us to send and receive data
const bodyParser = require("body-parser");
//knex allows us to have access to our database
const knex = require("knex");


const app = express();

//login /sign up
let initialPath = path.join(__dirname+ "public");
app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})


app.get("/login")

app.listen(3000, (req, res) => {
    console.log("listening on port 3000....... ")
})


//k
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname+"/public")));

server.listen(5000);