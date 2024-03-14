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
            // TEST A
            console.log(req.session.user);
            return res.status(200).send("Login Successful");
        } else {
            return res.status(400).send("Incorrect password");
        }
    } else {
        return res.status(401).send("User not found");
    }
});

// Get current user
router.get('/currentuser', async (req, res) => {
    // TEST B
    console.log(req.session.user);
    res.sendStatus(200);
})

// Export router and all its paths
module.exports = router;