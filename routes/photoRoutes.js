// Routes for retrieving all photos related information
// Require in router from express
const { Router } = require('express');
const { Photos } = require('../models');

// Create an instance of router
const router = Router();

// Endpoint to retrieve all photos
router.get('/photos', async (req, res) => {
    try {
        console.log("Getting all images: GET api/photos");
        const images = await Photos.findAll();
        return res.status(200).json(images);
    } catch(err) {
        return res.status(500).json(err);
    }
});

router.get('/photos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        console.log("Getting image by ID: GET api/photos/$photo_id");
        const image = await Photos.findOne({ where: { id }, include: ['captions'] });
        if(image){
            return res.status(200).json(image);
        } else {
            return res.status(404).send('Image with the specified ID does not exist');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
});

// Export router and all its paths
module.exports = router;