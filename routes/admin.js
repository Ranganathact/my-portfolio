let data = require('../my-data.json');
let express = require('express');
let router = express.Router();


router.get('/dashboard', function (req, res) {
    res.render('admin/dashboard', {
        layout: 'layout-admin',
        title: 'dashboard',
        navdash: true
    })
});




router.get('/projectlist',function (req,res) {
    res.render('admin/projectlist', {
        title:'project-list',
        layout:'layout-admin',
        projects : data.myProjects
    })
});


router.get('/adminprojectdetails' ,function (req,res) {
    res.render('admin/project-details', {
        title:'project-details',
        layout:'layout-admin',
        projects : data.myProjects
    })
});







module.exports = router;


// module.exports.adminprojectlist =function (req,res) {
//     res.render('admin/projectlist', {
//         title:'project-list',
//         layout:'layout-admin',
//         projects : data.myProjects
//     })
// }

// module.exports.adminprojectdetails =function (req,res) {
//     res.render('admin/project-details', {
//         title:'project-list',
//         layout:'layout-admin'
//         //projects : data.myProjects
//     })
// }

// module.exports.dashboard = function (req, res) {
//     res.render('dashboard', {
//         layout: 'layout-admin',
//         title: 'dashboard',
//         navdash: true
//     })
// }

