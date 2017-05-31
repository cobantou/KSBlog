var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/', function(req, res, next) {
    res.render('articles/total_list', { title: 'Express' });
});

module.exports = router;
