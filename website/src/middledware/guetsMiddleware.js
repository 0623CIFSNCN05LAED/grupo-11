function guetsMiddleware(req, res, next){

    if(req.session.userLogged) {
        let user = req.session.userLogged
        return res.redirect("/profile/" + user.id)
    }
    next();

}

module.exports = guetsMiddleware