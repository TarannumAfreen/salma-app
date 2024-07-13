const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');

// Load environment variables from .env file
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/data', require('./routes/dataRoutes'));
app.use('/api/intelligence', require('./routes/intelligenceRoutes'));
app.use('/api/economy', require('./routes/economyRoutes'));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
