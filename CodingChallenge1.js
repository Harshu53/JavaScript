var intMarkHeight, intJohnHeight;
var intMarkMass, intJohnMass;
var intMarkBmi, intJohnBmi;

intMarkHeight = 1.69;
intJohnHeight = 1.95;

intMarkMass = 78;
intJohnMass = 92;

intMarkBmi = intMarkMass / ( intMarkHeight * intMarkHeight );
console.log( 'Mark\'s BMi is ' + intMarkBmi  );
intJohnBmi = intJohnMass / ( intJohnHeight * intJohnHeight );
console.log( 'John\'s BMi is ' + intJohnBmi  );

if( intMarkBmi > intJohnBmi ) {
	console.log( 'Mark\'s BMI is higher than John\'s.' );
} else {
	console.log( 'John\'s BMI is higher than Mark\'s?' );
}