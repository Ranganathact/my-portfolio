let data = require('../my-data.json');
let express = require('express');
let router = express.Router();





router.get('/', function (req, res) {
    let random = Math.floor(Math.random() * data.myBlog.length);
    res.render('blog', {
        layout: 'layout',
        title: 'blog',
        blogs: data.myBlog,
        blogCategories: data.blogCategories,
        featuredBlog: data.myBlog[random]
    })
});


module.exports = router; 




// router.get('/blog' , function (req, res) {
    //     res.render('blog', {
    //         layout: 'layout',
    //         title: 'blog',
    //         navblog: true
        
    //     })
    // });
    
    

// // module.exports.blog = function (req, res) {
// //     res.render('blog', {
// //         layout: 'layout',
// //         title: 'blog',
// //         navblog: true
// //     })
// // };




// module.exports.blog = function (req, res) {
//     let random = Math.floor(Math.random() * data.myBlog.length);
//     res.render('blog', {
//         layout: 'layout',
//         title: 'blog',
//         blogs: data.myBlog,
//         blogCategories: data.blogCategories,
//         featuredBlog: data.myBlog[random]
//     })
// };

