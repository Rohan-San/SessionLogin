// express.js
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(new session);

const app = express();

// Configure session middleware
app.use(
  session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: require('./database') }),
  })
);

// Add middleware and routes here

module.exports = app;
