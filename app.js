const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const app = express();
const appMiddleware = require('./middleware/appMiddleware');
const session = require('express-session');



const index =require('./routes/index');
const projects =require('./routes/projects');
const blog = require('./routes/blog');
const admin = require('./routes/admin');



const validator = require('express-validator');



app.set('views',__dirname+'/views');
app.set('view engine','hbs');
// app.set('view options', {layout: 'layout'});



hbs.registerPartials(__dirname+'/views/partials')

hbs.registerHelper("inc", function(value, options) {
    return value+1;
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
    secret:'my secret',
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000000}
}))

app.use(validator());

app.use(express.static(__dirname+'/static'))

app.use(appMiddleware.logger);


// function auth (req,res,next) {
//     var loggedin = req.session.isLoggedIn;
//     console.log(loggedin)
//     if(loggedin) {
//         next()
//     }else{
//         res.redirect('/login')
//     }
    
// }

app.use(appMiddleware.authenticated)

 app.use('/', index);
 app.use('/projects', projects);
 app.use('/blog', blog);
 app.use('/admin', appMiddleware.authenticate ,admin);

 

// app.get('/dashboard',routes.dashboard);
// app.get('/admin/projectlist',routes.adminprojectlist);
// app.get('/admin/projectdetails',routes.adminprojectdetails);



// app.get('/login',routes.login);
// app.post('/login',routes.dologin);

// app.get('/signup', routes.signup);
// app.post('/signup',routes.dosignup);




// app.get('/projectlist',routes.projectlist);


// app.get('/blog',routes.blog);

// app.get('/projectlist/:alias',routes.projectdetail);


app.use(appMiddleware.notFoundError);

app.use(appMiddleware.handleError);

app.listen(5002,() => console.log('server started on 5002'));
