const redirectToID = (req, res, next) => {
  res.redirect('/dashboard/'+req.session.user_id);
  };
  
  module.exports = redirectToID;