var arrintBillAmounts		= [124,48,268];
var arrintTipAmount 		= [];
var arrintTipAndBillAmount	= [];

function calculateTipAmount(intBillAmount) {
	if( 50 > intBillAmount ) {
		return ( intBillAmount * 20 ) / 100; 
	} else if( 50 < intBillAmount && 200 > intBillAmount) {
		return ( intBillAmount * 15 ) / 100;
	} else {
		return ( intBillAmount * 10 ) / 100;
	}
}

arrintTipAmount.push(calculateTipAmount(124));
arrintTipAmount.push(calculateTipAmount(48));
arrintTipAmount.push(calculateTipAmount(268));
console.log(arrintTipAmount);
arrintTipAndBillAmount.push(calculateTipAmount(124)+124);
arrintTipAndBillAmount.push(calculateTipAmount(48)+48);
arrintTipAndBillAmount.push(calculateTipAmount(268)+268);
console.log(arrintTipAndBillAmount);