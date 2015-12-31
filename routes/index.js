var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET boot page. */
router.get('/', function(req, res, next) {
  res.render('index001', { title: '=== Bootstrap ===' });
});

module.exports = router;
