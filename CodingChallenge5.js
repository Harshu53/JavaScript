var mixobjJohn = {
	intbillvalues	: [124,48,268,180,42],
	calculateTip	: function() {
		this.arrintTipAmount = [];
		this.arrintBillAndTipAmount = [];
		for(i=0; i < this.intbillvalues.length; i++) {
			if(50 > this.intbillvalues[i]) {
				this.arrintTipAmount[i]			= (this.intbillvalues[i] * 20) / 100;
				this.arrintBillAndTipAmount[i]	= ((this.intbillvalues[i] * 20) / 100 ) + this.intbillvalues[i];
			} else if( 50 <= this.intbillvalues[i] && 200 > this.intbillvalues[i] ) {
				this.arrintTipAmount[i]			= (this.intbillvalues[i] * 15) / 100;
				this.arrintBillAndTipAmount[i]	= ((this.intbillvalues[i] * 15) / 100 ) + this.intbillvalues[i];
			} else {
				this.arrintTipAmount[i]			= (this.intbillvalues[i] * 10) / 100;
				this.arrintBillAndTipAmount[i]	= ((this.intbillvalues[i] * 10) / 100 ) + this.intbillvalues[i];
			}
		}
	}
}

mixobjJohn.calculateTip();
console.log(mixobjJohn);


/*Some Extra Challenge*/
var mixobjMark = {
	intbillvalues	: [77,375,110,45],
	calculateTip	: function() {
		this.arrintTipAmount = [];
		for(i=0; i < this.intbillvalues.length; i++) {
			if(100 > this.intbillvalues[i]) {
				this.arrintTipAmount[i] = (this.intbillvalues[i] * 20) / 100;
			} else if( 100 < this.intbillvalues[i] && 300 > this.intbillvalues[i] ) {
				this.arrintTipAmount[i] = (this.intbillvalues[i] * 10) / 100;
			} else {
				this.arrintTipAmount[i] = (this.intbillvalues[i] * 25) / 100;
			}
		}
	}
}

mixobjMark.calculateTip();
console.log(mixobjMark);

function calculateAverageTip(arrintTipAmount) {
	var arrintTotalTip = 0;
	for(var i = 0; i < arrintTipAmount.length; i++ ) {
		arrintTotalTip = arrintTotalTip + arrintTipAmount[i];
	}

	return arrintTotalTip/arrintTipAmount.length;
}

console.log(calculateAverageTip(mixobjJohn.arrintTipAmount));
console.log(calculateAverageTip(mixobjMark.arrintTipAmount));

if( calculateAverageTip(mixobjJohn.arrintTipAmount) > calculateAverageTip(mixobjMark.arrintTipAmount) ) {
	console.log('John\'s family has greater average.');
} else {
	console.log('Mark\'s family has greater average.');
}
















