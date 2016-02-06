#Color of the Day
This simple app is meant to generate an aestethically pleasing color on the server, send it to the the client, which displays it in a nice manner with complementary colors.

##Technologies
*NodeJS
*MongoDB


##Structure
###Color generation
	1. Generate (calculated) RGB. (It is easier to apply the mathematics this way)
	1.2 Generate complimentary RGB.
	2. Generate HEX colors.
	3. Write and return object.

###Serve Colors

##API

###Input
The main function takes an option object as an argument.
```javascript
{
	nice: true || false, /*If false color is completely random*/
	complementary: [true||false, amount], /*If function should return complementary colors and how many*/
	type: "hex" || "rgb" /*How the colors should be returned, #123456 or rgb(122, 220, 79)*/
}
```

###Output
```javascript
{
	randomColor: "#123456", /*Returns the random color in appropriate format*/
	complementary: [
		color1,
		color2,
		color3
		...
	]
}

```