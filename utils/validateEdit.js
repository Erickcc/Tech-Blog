const validatePostAccess = (req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const desiredAccess = fullUrl.split("/")?.pop();
    // Get text between the strings "id=" and "&"
    const userID = desiredAccess.match(/(?<=id=)(.*)(?=&)/)[0];
    // console.log(userID[0]);
    if(userID === req.session.user_id.toString()){
        next();
    }else{
        res.redirect('/');
    }
    };
    
    module.exports = validatePostAccess;