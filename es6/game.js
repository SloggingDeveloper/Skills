'use strict'

let board = ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'];
function rand(m, n) {
    return Math.floor(Math.random() * (m - n + 1));
}

function randomFace() {
    return board[rand(1, 6)];
}

function placeBets(fundsAvailable) {
    let betFund = rand(1, fundsAvailable);
    let bets = {};
    for (let i = 0; i < board.length; i++)
        bets[board[i]] = 0;

    if (betFund == 7) {
        nets.crown = fundsAvailable;
        fundsAvailable = 0;
    }
    else {
        do {
            var randFund = rand(1, betFund);
            var randFace = randomFace();
            bets[randFace] = bets[randFace] + randFund;
            betFund = betFund - randFund;
            fundsAvailable = fundsAvailable - randFund;
        } while (betFund > 0)
    }
    return bets;
}

function rollDice() {
    return randomFace();
}

function play(totalFunds) {
    let bets = placeBets(totalFunds);
    dice1 = rollDice();
    dice2 = rollDice();
    dice3 = rollDice();

    betMoneyWon = bets[dice1] + bets[dice2] + bets[dice3];
    return betsWon;
}


