var express = require('express');
var router = express.Router();

var request = require('request');

var http = require("http");
var url = require("url");

/* GET. 
 * http://localhost:3000/?url=<urlhere>
 * http://localhost:3000/?url=https://jsonplaceholder.typicode.com/users 
 */
router.get('/', function(req, res, next) {
  var urlParam = req.query.url;
  request.get(urlParam, function(err, body, resp) {
  	res.send(resp);
  });
});

module.exports = router;
