const express = require('express');
let data = require('../my-data.json');
let router = express.Router();
// const Project = require('../models/projectSchema')

let Client = require('mongodb').MongoClient;

let dbUrl = 'mongodb://localhost:27017';

let db;


Client.connect(dbUrl, {useNewUrlParser:true}, function (error, client) {
    if(error) {
        console.log(error)
    }else {
        console.log('Successfully Connected to DB');
        db = client.db('mean')
    }
})


//const Project = require('../models/projectSchema')


router.get('/dashboard', function (req, res) {
    res.render('admin/dashboard', {
        layout: 'layout-admin',
        title: 'dashboard',
        navdash: true
    })
});




router.get('/projectlist',function (req,res,next) {

    let projectsCollection = db.collection('projects');

    projectsCollection.find().toArray(function(err, projectlist){

        if(err){
            next(err)
        }else{
            res.render('admin/projectlist', {
                title:'project-list',
                layout:'layout-admin',
                projects : data.myProjects
            })
        
        }
    })

});





router.get('/projectlist/create', (req,res) =>{
    res.render('admin/project-create',{
        title:"create new project",
        layout:"layout-admin"
    })
})



router.post('/projectlist/create', (req,res,next) =>{
    let data = req.body;

    let projectsCollection = db.collection('projects');

    projectsCollection.insertOne(data,function(err, project) {
        if(err) {
            console.log(err)
            next(err)
        }else{
            console.log(project.toJSON())
            res.redirect('/admin/projectlist')
    }

    })
})





    
router.get('/adminprojectdetails/:alias', (req,res) => {
    let alias = req.params.alias;
    let index = data.projectIndex[alias];
    let project = data.myProjects[index];

    res.render('admin/project-details', {
        title:'project-details',
        layout:'layout-admin',
        projects : project
    })
});



module.exports = router;





// let alias = data.name.toLowerCase().trim().split(' ').join('-')
// console.log(alias)
// data.alias = alias;





// let newProject = new Project(data);

// newProject.save(function(err, data){
//     if(err) {
//         next(err)
//     }else{
//         res.redirect('/admin/projects')
// }




























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

