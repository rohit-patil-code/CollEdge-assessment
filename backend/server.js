const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contacts', require('./routes/contactRoutes'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Contact Management API is running' });
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contactdb';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    console.error('\n💡 Troubleshooting tips:');
    console.error('1. If using MongoDB Atlas: Check Network Access → Whitelist your IP');
    console.error('2. Verify your MONGODB_URI in .env file is correct');
    console.error('3. Check if MongoDB service is running (for local setup)');
    console.error('4. See MONGODB_ATLAS_SETUP.md for detailed help\n');
    process.exit(1);
  });

