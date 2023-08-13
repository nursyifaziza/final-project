const express = require('express');
const router = express.Router();

const videoController = require('../controllers/videoController');

router.get('/', videoController.getVideoList);
router.get('/:videoId', videoController.getVideoDetail);

module.exports = router;