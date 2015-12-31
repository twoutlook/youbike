var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


/* GET boot page. */
// to fix double boots
// http://taipeibike.azurewebsites.net/boots/boots
//router.get('/boots', function(req, res, next) {


router.get('/', function(req, res, next) {


  // res.render('index001', { title: '=== Bootstrap ===' });
  res.render('boots', { title: '=== Bootstrap ===' });

});

module.exports = router;

