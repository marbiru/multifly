var myPickArray = [];
for (var i = 2; i <= 27; i++) {
    myPickArray.push(i);
};

myPickOutput.innerHTML = myPickArray.join(" | ");


function winChance(myPick) {

	var myWins = 0;
	var randomWins = 0;

	for (var randomPick = 2; randomPick <= 27; randomPick++) {

		if (randomPick % myPick == 0) {
			randomWins += 1;
		} else if (myPick % randomPick == 0) {
			myWins += 1;
		} else if (myPick < randomPick) {
			myWins += 1;
		} else if (randomPick < myPick) {
			randomWins += 1;
		};
	};

	console.log(myWins);

	return myWins

};

var myWinsArray = [];
for (var i = 2; i <= 27; i++) {
    myWinsArray.push(winChance(i));
};

/* var myWinsArray = [
	13,
	16,
	19,
	18,
] */

myWinsOutput.innerHTML = myWinsArray.join(" | ");