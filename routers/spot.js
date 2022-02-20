const express = require('express');
const {createSpot,deleteSpot,getSpotsByType,spotById} = require("../controllers/spot");
const router = express.Router();
router.get('/api/allspots',getSpotsByType);
router.post('/api/newspot',createSpot);
router.delete('/api/:spotId',deleteSpot);

router.param("spotId", spotById);

module.exports = router;