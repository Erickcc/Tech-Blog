const redirectToID = (req, res, next) => {
  // Middleware that allows us to redirect the user to its dashboard, adds the userid to the url
  res.redirect('/dashboard/'+req.session.user_id);
  };
  
  module.exports = redirectToID;