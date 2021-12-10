var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produkter', { title: 'produkter' });
});

module.exports = router;