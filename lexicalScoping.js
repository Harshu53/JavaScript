/*Hoisting of varible and function*/
var age = 30;
calculateAge();

function calculateAge() {
	console.log(age);
	var age = 23;
	console.log(age);
}



/*Lexical scope*/
var a = "Hello!";
first();

function first() {
	var b = "Hi!";
	second();

	function second() {
		var c = "Hey!";
		console.log(a + b + c);
	}
}