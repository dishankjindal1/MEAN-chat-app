const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('api called by ' + req.ip);
    next();
});
router.get('/logindata', (req, res) => {
    console.log('data : ', req.body);
    res.send('received!!');
});

module.exports = router;