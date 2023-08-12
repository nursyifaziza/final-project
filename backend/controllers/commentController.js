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
        const {username, comment} = req.body;
        const videoId = req.params.videoId;

        //Create a new comment
        const newComment = new Comment({username, text: comment, videoId});

        //Save the new comment
        await newComment.save();

        res.json({success: true});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}