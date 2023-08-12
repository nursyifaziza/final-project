const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');
// const CommentController = require('../controllers/commentController');

router.get('/comments/:videoId', commentController.getCommentList);
router.post('/comments/:videoId', commentController.submitComment);

module.exports = router;