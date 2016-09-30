var express = require("express");
var router = express.Router();

// router.get("/", function(req, res) {
// 	res.render("index", { title : 'Express', message: 'HI, again!' });
// });

/*
module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: '主页' });
  });
  app.get('/reg', function (req, res) {
    res.render('reg', { title: '註冊' });
  });
  app.post('/reg', function (req, res) {
  });
  app.get('/login', function (req, res) {
    res.render('login', { title: '登陸' });
  });
  app.post('/login', function (req, res) {
  });
  app.get('/post', function (req, res) {
    res.render('post', { title: '發表' });
  });
  app.post('/post', function (req, res) {
  });
  app.get('/logout', function (req, res) {
  });
}

*/

//module.exports = function(app) {
//  app.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//  });
//};

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

