'use strict'

let board = ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'];
function rand(m, n) {
    return Math.floor(Math.random() * (n - m + 1));
}

function randomFace() {
    let randValue = rand(1, 6);
    return board[randValue == 0 ? randValue : randValue - 1];
}

function placeBets(fundsAvailable) {
    let betFund = fundsAvailable == 1 ? fundsAvailable : rand(1, fundsAvailable);

    let totalbetValue = betFund;
    let bets = {};
    for (let i = 0; i < board.length; i++)
        bets[board[i]] = 0;

    if (betFund == 7) {
        bets.heart = fundsAvailable;
        totalbetValue = fundsAvailable;
    }
    else {

        do {
            let remainingFund = betFund > 1 ? rand(1, betFund) : betFund;
            var randFace = randomFace();
            bets[randFace] = bets[randFace] + remainingFund;
            betFund = betFund - remainingFund;
        } while (betFund)
    }
    return { betPlaced: bets, totalBetValue: totalbetValue };
}

function rollDice() {
    return randomFace();
}

function playRound(funds) {
    let bets = placeBets(funds);
    console.log(`total bets placed ${bets.totalBetValue}`)
    funds = funds - bets.totalBetValue;
    console.log(`funds available: ${funds}`)
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();

    let betMoneyWon = bets.betPlaced[dice1] + bets.betPlaced[dice2] + bets.betPlaced[dice3];
    console.log(`won ${betMoneyWon}`)
    return funds + betMoneyWon;
}

let totalFunds = 50;
let round = 0;
while (totalFunds && totalFunds < 100) {
    round++;
    console.log(`now playing round ${round}`);
    totalFunds = playRound(totalFunds);
}