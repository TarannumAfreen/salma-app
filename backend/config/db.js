const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = async () => {
    try {
      console.log('MongoDB URI:', process.env.MONGO_URI); // Add this line
      const conn = await mongoose.connect('mongodb+srv://SalmaSanubar:Salma_549@salmacluster.y5azttk.mongodb.net/Business-Tracking-App', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
