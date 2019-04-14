const {Router} = require('express');

const router = Router();
const home = require('./controllers/home');
const notice = require('./controllers/notice');
router.get('/', home.home);
router.get('/notice',notice.notice);
router.post('/notice', (req,res) =>{
    const title = req.body.title;
    const message = req.body.message;
    
    res.end()
})
module.exports = router;