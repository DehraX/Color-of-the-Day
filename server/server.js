
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


/*Functions*/




/*

Functions for generating color


TODO: Make the color aesthetically pleasing
TODO: Create a CRON-job to run every day
TODO: 
*/


function initColor(options){
	var res = {};

	var res.randomColor = options.nice ? generateNiceRGB() : generateRGB();/*Calling different function depening on color is nice*/
	var res.complementary = options.complementary[0] ? complementGen(res.randomColor, options.complementary[1]) : null; /*Returns array of complementary colors if applicable*/
	return res;
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