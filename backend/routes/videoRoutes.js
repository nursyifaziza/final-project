const express = require('express');
const router = express.Router();

const Video = require('../models/Video');
const VideoController = require('../controllers/videoController');

router.get('/videos', videoController.getVideoList);
router.get('/videos/:videoId', videoController.getVideoDetail);

module.exports = router;