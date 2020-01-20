let buttons = Array.from(document.getElementsByClassName("choice"));
let userChoice = document.getElementById("user")
let computer = document.getElementById("computer")
let counter = document.getElementById("game"), count = 0
let userWins = document.getElementById("win"), win = 0
let compWins = document.getElementById("loss"), lose = 0
let ties = document.getElementById("tie"), tie = 0

// let rock = document.getElementById("rock")
// console.log(rock);
// let paper = document.getElementById("paper")
// console.log(paper);
// let scissors = document.getElementById("scissors")
// console.log(scissors);


for (i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        let userPick = (this.id);
        userChoice.innerHTML = "You picked" + " " + userPick + ".";


        let compChoice = parseInt(Math.floor(Math.random() * 3));
        console.log(compChoice)

        if (compChoice === 0) {
            console.log("rock")
            compChoice = "rock"
            computer.innerHTML = "Computer picked" + " " + compChoice + ".";
        }
        else if (compChoice === 1) {
            console.log("paper")
            compChoice = "paper"
            computer.innerHTML = "Computer picked" + " " + compChoice + ".";
        }
        else if (compChoice === 2) {
            console.log("scissors")
            compChoice = "scissors"
            computer.innerHTML = "Computer picked" + " " + compChoice + ".";
        }
        if (compChoice === userPick) {
            console.log("tie");
            tie +=1
            ties.innerHTML = tie

        }
        else if (compChoice === "rock" && userPick === "paper") {
            console.log("user win");
            win +=1
            userWins.innerHTML = win

        }
        else if (compChoice === "paper" && userPick === "scissors") {
            console.log("user win");
            win +=1
            userWins.innerHTML = win
            

        }
        else if (compChoice === "scissors" && userPick === "rock") {
            console.log("user win");
            win +=1
            userWins.innerHTML = win
            

        }
        else {
            console.log("lose");
            lose +=1
            compWins.innerHTML = lose

        }
        count +=1;
        counter.innerHTML = count;

    })
}