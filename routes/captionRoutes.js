// Routes for all caption related information
// Require in router from express
const { Router } = require('express');
const { Caption, Users } = require('../models');

// Create an instance of router
const router = Router();

// Endpoint to add captions
router.post('/caption', async (req, res) => {
    try {
        console.log("Adding caption to photo: POST /api/caption");
        const { photo_id, user_id, caption} = req.body;
        const user = await Users.findOne({ where: { id: user_id}});
        const newCaption = await Caption.create({ photo_id, user_id: user.id, caption });
        return res.status(201).json(newCaption);
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

// Export the router
module.exports = router;