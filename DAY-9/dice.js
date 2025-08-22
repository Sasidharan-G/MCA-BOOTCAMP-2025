function rollDice() {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = "dice" + roll1 + ".png";
    document.getElementById("dice2").src = "dice" + roll2 + ".png";

    if (roll1 > roll2) {
        document.getElementById("result").textContent = "🎉 Player 1 Wins!";
    } else if (roll2 > roll1) {
        document.getElementById("result").textContent = "🎉 Player 2 Wins!";
    } else {
        document.getElementById("result").textContent = "🤝 It's a Draw!";
    }
}