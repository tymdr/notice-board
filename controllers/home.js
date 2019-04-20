const Notice = require('../models/notice');

function home(req, res) {
    Notice.find().exec().then(notices => {
        console.log(notices);
        res.render('index', { notices });
    });
}

module.exports = {
    home
}