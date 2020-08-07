const helperFunctions = require('./helper-functions.js');

// Input are passed in from room-manager.js
class Poker {
	constructor(initialPlayers, gameOptions) {
		// Applying game options 
		this.startingChips = gameOptions.startingChips;
		this.timeLimit = gameOptions.timeLimit;
		this.punishment = gameOptions.punishment;
		this.maxRaises = 3; // TODO: implement in client

		// Game initialization 
		this.deck = helperFunctions.createDeck();
		this.players = [];
		for (let player of initialPlayers) {
			this.players.push(helperFunctions.createPlayer(player, this.startingChips));
		}

		/* 
		Betting Rounds:
		Preflop 0
		Flop 1
		Turn 2
		River 3
		Showdown 4 
		*/
		this.bettingRound = 0;

		// Round data
		this.communityCards = [];
		this.pot = 0;
		this.smallBlindIndex = 0; // small blind position relative to players array
		this.currentPlayerIndex = 0;
		this.currentBet = 0;
		this.raises = 0;
	}

	getCard() {
		let index = Math.floor(Math.random() * this.deck.length);
		let card = this.deck[index];
		this.deck.splice(index, 1);

		return card;
	}

	/* 
	Moves:
	-2 = need response
	-1 = fold
	0 = check
	else = bet amount
	*/

	start() {
		for (let player of this.players) {
			player.inRound = true;
			player.balance = this.startingChips;
			player.move = -2;
			player.hand = [this.getCard(), this.getCard()];
		}

		this.smallBlindIndex = 0;
		this.currentPlayerIndex = 0;
	}    

	submitMove(move) {
		let player = this.players[this.currentPlayerIndex];

		if (move == -1) { // fold 
			player.inRound = false;	
		}
		else if (move > 0) { // raise
			this.currentBet = move;
			player.balance -= move;
			
			if (this.raises <= this.maxRaises) {
				// requires everyone else to respond to the raise
				for (let i = 0; i < this.players.length; i++) {
					if (i != this.currentPlayerIndex) {
						this.players[i].move = -2; // reminder: -2 means that a move is needed
					}
				}
			}
		}

		/* 
		If not fold, then player has checked. Nothing happens with checks, except for the changing of the current player, which will
		be handled in all folds, raises, and checks.
		*/

		this.nextRound();

	}

	nextRound() {
		// to be implemented
		return;
	}

}

let testObj = { startingChips: 1200, timeLimit: 20, punishment: true };

let testUserObj = {
	socketID: 12312312,
	username: "chau"
};

let playerArray = [testUserObj];

let pokerObj = new Poker(playerArray, testObj);

pokerObj.start();

console.log(pokerObj.players);

pokerObj.submitMove(400);

console.log(pokerObj.players);
