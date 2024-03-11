// Routes for retrieving all photos related information
// Require in router from express
const { Router } = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of router
const router = Router();

// Endpoint to retrieve all photos
router.get('/photos', (req, res) => {
    // Path to images folder
    const imagesFolder = path.join(process.cwd(), 'images');

    // Read the contents of the images folder
    fs.readdir(imagesFolder, (err, files) => {
        if(err) {
            console.log(err)
        }
        else {
            // Filter out non-image files
            const imageFiles = files.filter(file => {
                return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif');
            });
        
            // Send list of image filenames
            res.status(200).json(imageFiles)
        }
    })   
});

router.get('/photos/:photo_id', (req, res) => {
    const { photo_id } = req.params;
});

// Export router and all its paths
module.exports = router;