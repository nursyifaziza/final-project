const Product = require('../models/Product');

exports.getProductList = async(req, res) => {
    try {
        const videoId = req.params.videoId;
        const products = await Product.find({videoId: videoId});
        if (!products) {
            return res
                .status(404)
                .json({error: 'Currently, there are no products associated with this video'});
        }
        res.json(products);
    } catch (error) {
        res
            .status(500)
            .json({error: 'Internal server error'})
    }
};
