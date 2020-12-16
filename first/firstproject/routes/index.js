var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main', message:'Welcome to pug!!' });
});

router.get('/test', function(req, res, next) {
  res.render('test', {title : 'Text', content:"<font color='blue'>font</font>"});
});

module.exports = router;
