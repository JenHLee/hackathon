const express = require('express');
const {createSpot,deleteSpot,getSpots,spotById} = require("../controllers/spot");
const router = express.Router();
router.get('/allspots',getSpots);
router.post('/newspot',createSpot);
router.delete('/:spotId',deleteSpot);

router.param("spotId", spotById);

module.exports = router;