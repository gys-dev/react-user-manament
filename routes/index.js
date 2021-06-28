const Router = require('express').Router;
const User = require('../models/user');
const userRouters = require('./userRouters');
const postRouters = require('./postRouter')
const path = require('path');
const router = Router();


router.use('/api/users', userRouters);
router.use('/api/posts', postRouters);
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;