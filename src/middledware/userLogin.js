module.exports = (req,res,next)=>{
    if(!req.session.usserLoged){
        return res.redirect("/login");
    }

    next();
};