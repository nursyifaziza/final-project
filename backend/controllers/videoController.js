const Video = require('../models/Video');

exports.getVideoList = async(req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res
            .status(500)
            .json({error: 'Internal server error'});
    }
};

exports.getVideoDetail = async(req, res) => {
    try {
        const videoId = req.params.videoId;
        const video = await Video.findById(videoId);
        if (!video) {
            return res
                .status(404)
                .json({error: 'Video not exist'});
        }
        res.json(video);
    } catch (error) {
        res
            .status(500)
            .json({error: 'Internal server error'})
    }
};