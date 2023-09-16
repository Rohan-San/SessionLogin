// session.js
const session = require('express-session');

module.exports = session({
  secret: 'your-secret-key', // Replace with the same secret key as in express.js
  resave: false,
  saveUninitialized: true,
});
