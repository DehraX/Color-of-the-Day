
/*Communication functions*/

var http = require('http');


const PORT = 8000;

function handleRequest(request, response){
	response.end("<h1>Yay! Gummybears! This is the path:" + request.url + "</h1><style>body{background-color: " + generateRGB() + ";}</style>");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
console.log("Be quiet! Server is listening @ http://localhost:%s", PORT);

});




/*

Functions for generating color


TODO: Make the color aesthetically pleasing
TODO: Create a CRON-job to run every day
TODO: 
*/

function generateRGB(){

	/*Generate a number between 0-255 for each color*/
	var RGB = "rgb(" + randomColor() + ","+ randomColor() +","+ randomColor()+")";
	console.log(RGB);
	return RGB;
}

function randomColor(){
	return Math.round(Math.random()*255);
}