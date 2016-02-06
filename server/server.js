
/*Communication functions*/

var http = require('http');


const PORT = 8000;

function handleRequest(request, response){
	response.write("<style>body{background-color: " + generateRGB() + ";}</style>");
	response.end("<h1>Yay! Gummybears! This is the path:" + request.url + "</h1>");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
console.log("Be quiet! Server is listening @ http://localhost:%s", PORT);

});


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert')
  , db = require('mongodb').db
  , ObjectId = require('mongodb').ObjectID;

// Connection URL 
var url = 'mongodb://localhost:27017/coloroftheday';
// Use connect method to connect to the Server 
/*MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to db server");
  db.close()
});*/

/*

Functions for CRON job and DB writing
Should be executed every day
*/

var CronJob = require('cron').CronJob;
var job = new CronJob('00 * * * * *', function(){
	var color = new initColor({nice:false, complementary: [false]});

	/*Write color to DB*/

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function(){
  	db.close();
  });
  console.log("Connected correctly to db server");
});


var insertDocument = function(db, callback){
		db.collection("colors").insert({"color": color, "date": new Date()}, 
			function(err, result){
				assert.equal(err, null);
				console.log("Inserted a document into the colors collection");
				callback(result);
			});
};


});

job.start();




/*

Functions for generating color


TODO: Make the color aesthetically pleasing

*/


function initColor(options){

	this.randomColor = options.nice ? generateNiceRGB() : generateRGB();/*Calling different function depening on color is nice*/
	this.complementary = options.complementary[0] ? complementGen(res.randomColor, options.complementary[1]) : null; /*Returns array of complementary colors if applicable*/
	return this;
}

function generateRGB(){

	/*Generate a number between 0-255 for each color*/
	var RGB = {
		r: randomColor(),
		g: randomColor(),
		b: randomColor()
	}

	/*Just loggin' to see what's happnin'*/
	var RGBstring = "rgb(" + RGB.r + ","+ RGB.g +","+ RGB.b+")";
	console.log(RGBstring);
	return RGBstring;
}

function randomColor(){
	return Math.round(Math.random()*255);
}


function complementGen(color, amount){

}