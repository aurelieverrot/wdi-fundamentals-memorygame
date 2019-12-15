//console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//represents the first card the user flipped and store it 
var cardOne = cards[0];
cardsInPlay.push(cardOne);

//display the 1st card that was just flipped
console.log("User flipped queen");

//second card flipped and stored
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

//display the second card flipped
console.log("user flipped king");

//check if the two cards match
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) { 
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}
