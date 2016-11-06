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

var jsonParse = function(body){
	return JSON.parse(JSON.stringify(body));
}

router.get('/sample',function(req,res,next){
  res.send('hai')
})

router.get('/:hash', function(req,res){
	const pathToFile = "./../shared/" + req.params.hash + ".json"
	fs.readFile(pathToFile, 'utf8', (error,content)=> {
		if (error){
			return res.status(400).json({error: error});
		} 
		return res.json({data: jsonParse(content)});
	});

});

router.post('/save-link', function(req,res,next) {
	const bodyParams = req.body['data'];
	const { type, data, hash } = JSON.parse(bodyParams);
	saveData = JSON.stringify({
		options: type,
		data: data
	});
	console.log(saveData);
	var error = null;
	if (hash && type && data){
		const pathToFile = './../shared/'+hash+'.json';
		fs.writeFile(pathToFile, saveData, (err)=> {
			if (err) {
				error = err;
			}

		});

	} 
	if (error){
		return res.status(400).json({error: error});
	} 
	return res.json({link: hash});

});

module.exports = router;
