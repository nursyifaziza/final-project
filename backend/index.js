const express = require('express');
const cors = require('cors');
const app = express();
const expressListEndpoints = require('express-list-endpoints');

const videoRoutes = require('./routes/videoRoutes');
const productRoutes = require('./routes/productRoutes');
const commentRoutes = require('./routes/commentRoutes');
const connectDB = require('./config/db');

connectDB();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use('/api/videos', videoRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);

console.log('Registered Routes:');
expressListEndpoints(app).forEach(route => {
    console.log(`${route.methods.join(', ')} -> ${route.path}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});