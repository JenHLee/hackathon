const express = require('express');
const {createSpot,deleteSpot,getSpots,spotById} = require("../controllers/spot");
const router = express.Router();
router.get('/api/allspots',getSpots);
router.post('/api/newspot',createSpot);
router.delete('/api/:spotId',deleteSpot);

router.param("spotId", spotById);

module.exports = router;