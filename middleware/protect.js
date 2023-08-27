const protect = (req, res, next) => {
    console.log(req.session);
    if(!req.session.user){
        return res.status(401).json({
            "Message":"Authorization Error"
        });
    }

    next();
}

module.exports = {
    protect
}