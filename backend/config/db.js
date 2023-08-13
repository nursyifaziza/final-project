const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://127.0.0.1:27017';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {dbName: 'live-shoping-app'});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;