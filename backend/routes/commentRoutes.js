const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/:videoId', commentController.getCommentList);
router.post('/:videoId', commentController.submitComment);

module.exports = router;