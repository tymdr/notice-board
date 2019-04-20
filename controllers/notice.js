const Notice = require('../models/notice');

function show(req, res) {
    res.render('notice');
}

function create(req, res) {
    const { title, message, type } = req.body;
    const notice = new Notice({ title, message, type });
    notice.save()
        .then(n => {
            console.log(n);
            res.redirect("/");
        });
}

module.exports = {
    show,
    create
}