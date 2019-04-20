const Category = require('../../models/category');

function list(req, res) {
    Category.find().exec().then(categories => {
        res.render('admin/category',  { categories });
    })   
}

module.exports = {
    list
}