function userAdmin(req, res, next){
    res.locals.admin = false
    if(req.session && req.session.admin){
        res.locals.admin = true
    }
    next();
}

module.exports = userAdmin