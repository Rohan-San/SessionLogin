// database.js
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/myapp'; // Replace with your MongoDB URI

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
