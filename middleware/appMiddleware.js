module.exports.logger = function (req, res, next) {
    console.log(`${req.method} ${req.url}`)                //in terminal it will be shown as method / url
    next()                                                 //                                GET / login
};

module.exports.notFoundError = function (req, res, next) {
    res.render('404', {
        title: 'page not found',
        layout: 'layout'
    })
};

module.exports.handleError = function (err, req, res, next) {
    console.log(err);
    res.render('500', {
        title: 'something went wrong',
        layout: 'layout'

    })
};


module.exports.authenticate = function(req,res,next){
    let loggedIn = req.session.isLoggedIn;

    if(loggedIn) {
        next()
    }else{
        req.redirect('/login')
    }
}


module.exports.authenticated = function(req,res,next){
    req.session.isLoggedIn = req.session.isLoggedIn ? true : false;
    console.log(req.session);
    if(req.session.isLoggedIn){
        res.locals.user = req.session.user;
        next();
    }else{
        next();
    }
}