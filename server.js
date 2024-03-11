// Import libraries/modules
const express = require("express");
const photosRouter = require('./routes/photos.js')
const { sequelize, Users, Captions } = require('./models');

// Create an instance of express server
const app = express();

// Declare a port for the server to listen on
const PORT = 3001;

// Middleware
app.use(express.json());

// Use the required routes from the routes file
app.use('/api', photosRouter);

// Set up server to listen on specified port
// Create the tables if not exist
app.listen({ port: PORT}, async () => {
    console.log(`Running express server on port: ${PORT}`);
    await sequelize.authenticate();
    console.log(`Database connected`);
});