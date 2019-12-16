//console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	//check if the two cards match
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) { 
			alert("You found a match");
		} else {
			alert("Sorry, try again");
		}
	}
};

function flipCard(cardId) {
	//gives user what card has been flipped
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);

