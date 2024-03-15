// Import libraries/modules
const express = require("express");
const photosRouter = require('./routes/photoRoutes.js');
const captionsRouter = require('./routes/captionRoutes.js');
const usersRouter = require('./routes/userRoutes.js');
const { sequelize, Users, Captions } = require('./models');
const session = require("express-session");

// Create an instance of express server
const app = express();

// Declare a port for the server to listen on
const PORT = 3001;

// Middleware
app.use(express.json());

// Create memory store for session
const memoryStore = new session.MemoryStore();

// Create session middleware
app.use(
    session({
        secret: "topSecretString",
        cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false, sameSite: "none"},
        resave: false,
        saveUninitialized: false,
        store: memoryStore,
    })
);

// Use the required routes from the routes file
app.use('/api', photosRouter);
app.use('/api', captionsRouter);
app.use('/api', usersRouter);

// Set up server to listen on specified port
// Create the tables if not exist
app.listen({ port: PORT}, async () => {
    console.log(`Running express server on port: ${PORT}`);
    await sequelize.authenticate();
    console.log(`Database connected`);
});