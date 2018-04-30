const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('api called by ' + req.ip);
});
router.get('/', (req, res) => {
    console.log('Hello World');
});

module.exports = router;