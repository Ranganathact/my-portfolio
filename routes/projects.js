let data = require('../my-data.json');
let express = require('express')
let router = express.Router();



router.get('/', function (req, res, next) {

 let Projects = data.myProjects;
    res.render('projectlist', {
        layout: 'layout',
        title: 'album page',
        navproject : true,
       Projects: Projects
    })
});




router.get('/:alias', function (req, res) {
    let alias = req.params.alias;
    let index = data.projectIndex[alias];
    let project = data.myProjects[index];

    res.render('project-detail', {
        layout: 'layout',
        title: 'project',
        project: project
    })
});


module.exports = router;










// // module.exports.contact = function (req, res) {
// //     res.render('contact', {
// //         layout: 'layout',
// //         title: 'contact us',
// //         navcontact: true
// //     })
// // };



// module.exports.projectlist = function (req, res, next) {

//  let Projects = data.myProjects;
//     res.render('projectlist', {
//         layout: 'layout',
//         title: 'album page',
//         navproject : true,
//        Projects: Projects
//     })
// };


// module.exports.projectdetail = function (req, res) {
//     let alias = req.params.alias;
//     let index = data.projectIndex[alias];
//     let project = data.myProjects[index];

//     res.render('project-detail', {
//         layout: 'layout',
//         title: 'project',
//         project: project
//     })
// };

