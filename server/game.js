// Input are passed in from room-manager.js

class Poker {
    constructor(initialUser, { startingChips, timeLimit, punishment }) { // gameOptions = { startingChips, timeLimit, punishment }
        // Options
        this.startingChips = startingChips;
        this.timeLimit = timeLimit;
        this.punishment = punishment;

        /*
            Betting Rounds:
            Preflop 0
            Flop 1
            Turn 2
            River 3
            Showdown 4
        */
        this.pokerState = 0;
        this.pot = 0;
        this.buttonIndex = 0;
    }
}

let testObj = { startingChips: 1200, timeLimit: 20, punishment: true };

let pokerObj = new Poker("chau", testObj);


console.log(JSON.stringify(pokerObj));
