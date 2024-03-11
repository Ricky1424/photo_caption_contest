// Import libraries/modules
const express = require("express");
const { sequelize, Users, Captions } = require('./models');

// Create an instance of express server
const app = express();

// Declare a port for the server to listen on
const PORT = 3001;

// Middleware
app.use(express.json());


// app.post('/users', async(req, res) => {
//     const { username, email, password} = req.body;

//     try{
//         const user = await User.create({ username, email, password })

//         return res.json(user)
//     } catch(err){
//         console.log(err);
//         return res.status(500).json(err);
//     }
// })

// app.post('/captions', async (req, res) => {
//     const { id, body } = req.body;
//     try {
//         const user = await Users.findOne({ where: {id: id}});

//         const caption = await Captions.create({ body, userId: user.id});

//         return res.json(caption)
//     } catch(err) {
//         console.log(err)
//         return res.status(500).send(err);
//     }
// })

// Simple get request to confirm it is working. 
app.get("/",(req, res) => {
    res.status(200).send("Get request successful");
});

// Set up server to listen on specified port
// Create the tables if not exist
app.listen({ port: PORT}, async () => {
    console.log(`Running express server on port: ${PORT}`);
    await sequelize.authenticate();
    console.log(`Database connected`);
});