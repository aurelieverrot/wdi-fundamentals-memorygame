//console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);


//array containing the cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//array containing fliped cards
var cardsInPlay = [];


//function checking if there is a match between two cards
function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) { 
			alert("You found a match");
		} else {
			alert("Sorry, try again");
		}
	
};

//function giving user info about the card flipped
function flipCard() {
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	this.setAttribute("src", cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	
};


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

createBoard();



