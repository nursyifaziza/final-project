const Comment = require('../models/Comment');

exports.getCommentList = async(req, res) => {
    try {
        const videoId = req.params.videoId;
        const comments = await Comment.find({videoId: videoId});
        if (!comments) {
            return res
                .status(404)
                .json({error: 'Comments are empty'});
        }
        res.json(comments);
    } catch (error) {
        res
            .status(500)
            .json({error: 'Internal server error'});
    }
};

exports.submitComment = async(req, res) => {
    try {
        const newComment = new Comment({username: req.body.username, text: req.body.text, videoId: req.body.videoId});

        await newComment.save();
        res
            .status(201)
            .json({success: true});
    } catch (error) {
        console.error('Error creating comment:', error);
        res
            .status(500)
            .json({error: 'Failed to create comment'});
    }
}