let data = require('../my-data.json');
let express = require('express');
let router = express.Router();




router.get('/', function (req, res) {
    res.render('index', {
        layout: 'layout',
        title: 'album page',
        navhome: true
    })
});


router.get('/login', function (req, res) {
    res.render('login', {
        layout: 'layout-sigin',
        title: 'login',
        navlogin: true,
        extraCss: '<link rel="stylesheet" href="/css/login.css">'
    })
});

// const user = {
//     name:"page",
//     email: "test@test.com",
//     password: "test"
// }


const user = [
    {
    name:"page",
    email: "test@test.com",
    password: "test"
},
{
    name:'js',
    email:"js@js.com",
    password:"java"
    
}]



router.post('/login', (req, res,next) =>
 {
    req.checkBody('email', 'email is required').isEmail().withMessage('invalid email');
    req.checkBody('password', 'password is required')
        .notEmpty().withMessage('password is required').isLength({ min: 3 }).withMessage('length should be 3');

    var errors = req.validationErrors();

    if (errors) {
        let msgs = errors.map(ele => ele.msg);
        res.render('login', {
            layout: 'layout-sigin',
            title: 'login',
            navlogin: true,
            extraCss: '<link rel="stylesheet" href="/css/login.css">',
            messages: msgs
        });
    } else {
        let data = req.body;
        let foundUser = user.filter(user => data.email == user.email && data.password == user.password)
        if(foundUser.length>0) {

            req.session.isLoggedIn = true;
            req.session.user = foundUser[0];
            res.redirect('/admin/dashboard')
        }else{
            res.render('login', {
                layout: 'layout-sigin',
                title: 'login',
               
                extraCss: '<link rel="stylesheet" href="/css/login.css">',
                messages: ['Email or password wrong']
            });
        }

///////////////////for one email & password

        // if (data.email == user.email && data.password == user.password) {
        //     req.session.isLoggedIn = true;
        //     req.session.user = user;
        //     res.redirect('/admin/dashboard')
        // } else {
        //     res.render('login', {
        //         layout: 'layout-sigin',
        //         title: 'login',
               
        //         extraCss: '<link rel="stylesheet" href="/css/login.css">',
        //         messages: ['Email or password wrong']
        //     });
        // }


    }

});

router.get('/logout',(req,res)=>{
    req.session.isLoggedIn=false;
    res.redirect('/login')
})



router.get('/contact', function (req, res) {
    res.render('contact', {
        layout: 'layout',
        title: 'contact us',
        navcontact: true
    })
});


router.get('/signup', function (req, res) {
    res.render('signup', {
        layout: 'layout-sigin',
        title: 'signup',
        extraCss: '<link rel="stylesheet" href="/css/login.css">'
    })
});
router.get('/dosignup', function (req, res) {
    let data = req.body;
    console.log(data);
    res.redirect('/login')

});

module.exports = router;






// // module.exports.projectlist = function (req, res) {
// //     res.render('projectlist', {
// //         layout: 'layout',
// //         title: 'album page'
// //     })
// // };



// // module.exports.projectdetail = function (req, res) {
// //     res.render('project-detail', {
// //         layout: 'layout',
// //         title: 'project'
// //     })
// // };



// // module.exports.dologin = function (req, res) {
// //     let body = req.body;
// //     console.log(body)

// //     res.redirect('/')
// // }





// // module.exports.adminprojectlist =function (req,res) {
// //     res.render('admin/projectlist', {
// //         title:'project-list',
// //         layout:'layout-admin'
// //     })
// // }



// // module.exports.blog = function (req, res) {
// //     let alias = req.params.alias;
// //     let index = data.projectIndex[alias];
// //     let project = data.myProjects[index];

// //     res.render('blog', {
// //         layout: 'layout',
// //         title: 'blog',
// //         project:project
// //     })
// // };



// router.post('/dologin',  (req, res) => {
//     req.checkBody('email', 'email is required').isEmail().withMessage('invalid email');
//     req.checkBody('password', 'password is required')
//     .notEmpty().withMessage('password is required').isLength({min:3-}).withMessage('length should be 5')

//     var errors = req.validationErrors();
//     if(errors) {
//         let msgs = errors.map(ele =>ele.msg);
//         res.render('login', {
//             layout: 'layout-sigin',
//             title: 'login',
//             navlogin: true,
//             extraCss: '<link rel="stylesheet" href="/css/login.css">',
//             messages: msgs

//     });
// }else{
//     res.redirect('/')
// }

// });
/////////////////////////////////////////////////////////////////////
// router.post('/login',(req,res)=>{
//     req.checkBody('email','Email is Required').isEmail().withMessage('Invalid Email');

//     req.checkBody('password','Password is required').notEmpty().withMessage('Password is required').isLength({min:5}).withMessage('Length should be min 5');

//     var errors = req.validationErrors();

//     if(errors){
//         let msgs = errors.map(ele => ele.msg);
         
//      res.render('login',{
//          layout:'layout-signin',
//          title:'Login Page',
//          navAdmin: true,
//          extraCss:'<link rel="stylesheet" href="/css/signin.css">',
//          messages: msgs
//      }); 
//     }else{
//      res.redirect('/admin/dashboard');
//     }
// })
