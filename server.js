//allows the creation of a server
const express = require("express");
//path allows us to know our html and css file location
const path = require("path");
//boy parser allows us to send and receive data
const bodyParser = require("body-parser");
//knex allows us to have access to our database
const knex = require("knex");

 // connecting the database with the use of knex
const db = knex({
    //client is called pg because we are using the postgres connection (psql)
    client: "pg",
    connection:{
        //host:"109.78.97.4",
        host: "127.0.0.1",
        user:"postgres",
        password: "gymble15",
        database: "loginform"
    }
})

const app = express();

//login /sign up
let initialPath = path.join(__dirname, "public/");
app.use(bodyParser.json());
app.use(express.static(initialPath));

//creating backlinks for pages
app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "home/index.html"))
})


app.get("/login", (req, res) =>{
    res.sendFile(path.join(initialPath, "home/login.html"))
})

app.get("/register", (req, res) =>{
    res.sendFile(path.join(initialPath, "home/register.html"))
})
app.get("/swipe", (req, res) =>{
    res.sendFile(path.join(initialPath, "swipe.html"))
})
app.get("/search", (req, res) =>{
    res.sendFile(path.join(initialPath, "search.html"))
})

app.get("/messages", (req, res) =>{
    res.sendFile(path.join(initialPath, "messages.html"))
})
app.get("/add", (req, res) =>{
    res.sendFile(path.join(initialPath, "profile/add.html"))
})
app.get("/gymswap", (req, res) =>{
    res.sendFile(path.join(initialPath, "profile/gymswap.html"))
})
app.get("/preview", (req, res) =>{
    res.sendFile(path.join(initialPath, "profile/preview.html"))
})
app.get("/profile", (req, res) =>{
    res.sendFile(path.join(initialPath, "profile/profile.html"))
})
app.get("/settings", (req, res) =>{
    res.sendFile(path.join(initialPath, "profile/settings.html"))
})

//creating a register-user backlink
app.post("/register-user", async (req, res) =>{
    //making it easier to access the variable name instead of using the full path for it 

    try{
        const{fName, lName,age,email,password} = req.body
        
        //checking if fields are empty or not
        if(!fName.length || !lName.length || !age.length || !email.length || !password.length){
            res.json("fill all the fields")
        }
        else{
            //storing the data that was filled in on the registration form into the databse
            db("users").insert({
                fname: fName,
                lname: lName,
                age: age,
                email: email,
                password: password
            })
            //information taken from registration to add to html
            .returning(["fname","age","email"])
            .then(data =>{
                res.json(data[0])
            })
            //using catch block to look for a specific error to check if the user already exists
        }
    }
    catch(e){
        if(err.detail.includes('already exists')){
            res.json('email already exists');
            alert("Email already exists")
            
    }}
})
//login
app.post('/login-user',(req,res) =>{
    const {email, password} = req.body

    db.select("fname","email")
    .from("users")
    .where({
        email: email,
        password: password
    })
    .then(data =>{
        if(data.length){
            res.json(data[0])
        }
        else{
            res.json("email or password is incorrect")
        }
    })
})

app.get('/users', async (req, res) =>{
    const searchName = req.query.fname
    const query = {
        text: 'SELECT * FROM USERS WHERE fname ILIKE $!',
        values: [`%${searchName}%`],
    }
    try {
        const { rows } = await db.query(query)
        res.json(rows)
    }
    catch (err){
        console.error(err)
        res.status(500).send('Error querying database')
    }
})


app.listen(3000, (req, res) => {
    console.log("listening on port 3000....... ")
})

//k
/*
/*const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "/public")));

io.on("connection", function(socket) {
  //joining the conversation function
  socket.on("newuser", function(username) {
    socket.broadcast.emit("update", username + "joined the conversation");
  });
  //leaving the conversation function
  socket.on("exituser", function(username) {
    socket.broadcast.emit("update", username + "left the conversation");
  });
  socket.on("chat", function(message) {
    socket.broadcast.emit("chat", message);
  });
});

Server.listen(5000)*/
