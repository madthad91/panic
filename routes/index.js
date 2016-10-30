var express = require('express');
var router = express.Router();

var request = require('request');

var http = require("http");
var url = require("url");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Expresssss');
});

router.get('/posts', function(req, res, next) {
  request.get('https://jsonplaceholder.typicode.com/posts', function(err, body, resp) {
  	res.send(resp);
  });
});

router.get('/users', function(req, res, next) {
  request.get('https://jsonplaceholder.typicode.com/users', function(err, body, resp) {
    res.send(resp);
  });
});

router.get('/todos', function(req, res, next) {
  request.get('https://jsonplaceholder.typicode.com/todos', function(err, body, resp) {
    res.send(resp);
  });
});

module.exports = router;
