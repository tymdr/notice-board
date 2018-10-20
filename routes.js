const {Router} = require('express');

const router = Router();
const home = require('./controllers/home');
const notice = require('./controllers/notice');
router.get('/', home.home);
router.get('/notice',notice.notice);
module.exports = router;