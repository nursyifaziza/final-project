const express = require('express');
const cors = require('cors');
const app = express();

const videoRoutes = require('./routes/videoRoutes');
const productRoutes = require('./routes/productRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use(cors());
app.use('/api/videos', videoRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});