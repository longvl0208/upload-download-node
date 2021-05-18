module.exports = (req, res, next) => {
    console.log("inside is auth", req.session)
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}