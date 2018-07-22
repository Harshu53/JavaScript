var objJohn = {
	strFullName : 'John smith',
	mass		: 92,
	height		: 1.95,
	calculateBmi: function() {
		this.bmi = this.mass / (this.height* this.height);
		return this.bmi;
	}
};

var objMark = {
	strFullName : 'Mark Miller',
	mass		: 78,
	height		: 1.69,
	calculateBmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

if( objMark.calculateBmi() < objJohn.calculateBmi() ) {
	console.log( objJohn.strFullName+'has higher bmi '+objJohn.bmi+' than '+ objMark.strFullName + ' bmi.');
} else if( objMark.calculateBmi() > objJohn.calculateBmi() ) {
	console.log( objMark.strFullName+'has higher bmi '+objMark.bmi+' than '+ objJohn.strFullName + ' bmi.');
} else {
	console.log('They both have same BMI');
}