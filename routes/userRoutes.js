// Routes for retrieving all photos related information
// Require in router from express
const { Router } = require('express');
const { Users } = require('../models');
const bcrypt = require('bcrypt');


// Create an instance of router
const router = Router();



// Password hash
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch(err) {
        console.log(err);
    }
    return null;
}

// Register new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    try {
        const newUser = await Users.create({ username, email, password: hashedPassword});
        return res.status(201).json(newUser);
    } catch(err) {
        console.log(hashedPassword);
        return res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });
    if(user) {
        const matchedPassword = await bcrypt.compare(password, user.password);
        if(matchedPassword) {
            // Attach an 'authenticated' property to session
            req.session.authenticated = true;
            // attach a user object to session
            req.session.user = {
                username,
                password,
            }
            return res.status(200).send("Login Successful");
        } else {
            return res.status(401).send("Incorrect password");
        }
    } else {
        return res.status(401).send("User not found");
    }
});

// Logout current user
router.post('/logout', async (req, res) => {
    if (req.session.authenticated === true) {
        try {
            // Clear user session data
            req.session.destroy(err => {
                if (err) {
                    throw err; // handle error
                }
                // Confirm logout was successful
                res.status(500).send("Successfully Logged Out");
            });
        } catch (error) {
            // Handle error
            console.error("Error while logging out:", error);
            // Send an error response if necessary
            res.status(200).send("Error occurred during logout");
        }
    } else {
        res.status(401).send("No user logged in")
    }
});

// Get current user - Mostly used for testing purposes. Can delete
router.get('/currentuser', async (req, res) => {
    // TEST
    console.log(req.session.authenticated);
    res.sendStatus(200);
});

// Export router and all its paths
module.exports = router;