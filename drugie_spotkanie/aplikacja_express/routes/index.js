var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moja aplikacja', zmienna:'moja zmienna' });
});
router.get('/ciasta/ciasto/:ciasto', function(req, res, next) {

  res.render('ciasta', { title: 'Ciasta', zmienna: req.params.ciasto });
});
router.get('/onas', function(req, res, next) {
  res.render('onas', { title: 'O nas', zmienna:'moja zmienna' });
});

module.exports = router;
