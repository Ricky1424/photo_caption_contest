// Import libraries/modules
const express = require("express");

// Create an instance of express server
const app = express();

// Declare a port for the server to listen on
const PORT = 3001;

const db = require("./models");
const { user } = require("./models");

// Simple get request to confirm it is working. 
app.get("/",(req, res) => {
    res.status(200).send("Get request successful");
});

// Static post route to confirm it is working
app.post("/create", (req, res) => {
    user.create({
        username: "user1",
        email: "user1email@email.com",
        password: "password",
    }).catch(err => {
        if(err) {
            console.log(err);
        }   
    });
    res.status(200).send("Added");
});

// Set up server to listen on specified port
// Create the tables if not exist
db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log(`Running express server on port: ${PORT}`);
    });
});