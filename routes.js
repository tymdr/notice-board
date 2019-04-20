const { Router } = require('express');
const home = require('./controllers/home');
const notice = require('./controllers/notice');
const admin = require('./controllers/admin/index');
const category = require('./controllers/admin/category');
const router = Router();

router.get('/', home.home);
router.get('/notice', notice.show);
router.post('/notice', notice.create);

router.get('/admin',admin.dashboard);
router.get('/admin/category',category.list);
module.exports = router;