var intJohnsTeamScore1 = 89;
var intJohnsTeamScore2 = 120;
var intJohnsTeamScore3 = 103;

var intMikesTeamScore1 = 116;
var intMikesTeamScore2 = 94;
var intMikesTeamScore3 = 123;

var intMarysTeamScore1 = 97;
var intMarysTeamScore2 = 134;
var intMarysTeamScore3 = 105;

/*1. calculate the average of score for each team*/
var intJohnsTeamAverage = ( intJohnsTeamScore1 + intJohnsTeamScore2 + intJohnsTeamScore3 ) / 3;
console.log('John\'s Team average is ' + intJohnsTeamAverage);//104

var intMikesTeamAverage = ( intMikesTeamScore1 + intMikesTeamScore2 + intMikesTeamScore3 ) / 3;
console.log('Mike\'s Team average is ' + intMikesTeamAverage);//111

var intMarysTeamAverage = ( intMarysTeamScore1 + intMarysTeamScore2 + intMarysTeamScore3 ) / 3;
console.log('Mary\'s Team average is ' + intMarysTeamAverage);

/*2. Decide which team is winner and 3. draw case*/
if( intJohnsTeamAverage > intMikesTeamAverage && intJohnsTeamAverage > intMarysTeamAverage ) {
	console.log('John\'s team is winner and average is '+ intJohnsTeamAverage);
} else if(intMikesTeamAverage > intJohnsTeamAverage && intMikesTeamAverage > intMarysTeamAverage) {
	console.log('Mike\'s team is winner and average is '+ intMikesTeamAverage);
} else if(intMarysTeamAverage > intJohnsTeamAverage && intMarysTeamAverage > intMikesTeamAverage) {
	console.log('Mary\'s team is winner and average is '+ intMikesTeamAverage);
} else {
	console.log('There is draw');
}