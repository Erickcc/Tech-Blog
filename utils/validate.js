const validateUser = (req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const desiredUser = fullUrl.split("/")?.pop();
    if(desiredUser === req.session.user_id.toString()){
        next();
    }else{
        res.redirect('/');
    }
    };
    
    module.exports = validateUser;