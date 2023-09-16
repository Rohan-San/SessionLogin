// sessionValidation.js
module.exports = (req, res, next) => {
    if (req.session && req.session.userId) {
      // User is authenticated, proceed to the next middleware
      return next();
    } else {
      // User is not authenticated, redirect to the login page
      return res.redirect('/login');
    }
  };
  