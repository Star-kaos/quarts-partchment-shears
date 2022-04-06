var computerChoice = null;
var img = document.createElement('img');
img.setAttribute("class", "imgSize");

//imgCreation1
function imgRock() {
    img.src = './Assets/Rock.png';
    document.getElementById('imgDivId').appendChild(img);
}

function imgPaper() {
    img.src = './Assets/Paper.png';
    document.getElementById('imgDivId').appendChild(img);
}

function imgScissors() {
    img.src = './Assets/Scissors.png';
    document.getElementById('imgDivId').appendChild(img);
}

function randomObject() {
    //rng
    const rng = Math.floor(Math.random() * 3)
    return rng
}

function displayRandomObject(event) {
    const playerChoice = event.currentTarget.value
    const rando = randomObject()

    if (rando === 0) {
        //rock
        document.getElementById("computerChoice").innerHTML = "Computer plays: Rock";
        computerChoice = "Rock";
        imgRock()
    } else if (rando === 1) {
        //paper
        document.getElementById("computerChoice").innerHTML = "Computer plays: Paper";
        computerChoice = "Paper";
        imgPaper()
    } else if (rando === 2) {
        //scissors
        document.getElementById("computerChoice").innerHTML = "Computer plays: Scissors";
        computerChoice = "Scissors";
        imgScissors()
    }

    checkOutcome(playerChoice, computerChoice)

}

function checkOutcome(playerChoice, computerChoice) {

    if (computerChoice === playerChoice) {
        // Tie
        document.getElementById("outCome").innerHTML = "Tie!";
        setTimeout(() => {
            alert('tie!')
        }, 50)
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        // Computer wins
        document.getElementById("outCome").innerHTML = "Computer wins!";
        setTimeout(() => {
            alert("Computer wins!")
        }, 50)
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        // Player wins
        document.getElementById("outCome").innerHTML = "Player wins!";
        setTimeout(() => {
            alert("Player wins!")
        }, 50)
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        // Computer wins
        document.getElementById("outCome").innerHTML = "Computer wins!";
        setTimeout(() => {
            alert("Computer wins!")
        }, 50)
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        // Player wins
        document.getElementById("outCome").innerHTML = "Player wins!";
        setTimeout(() => {
            alert("Player wins!")
        }, 50)
    } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        // Computer wins
        document.getElementById("outCome").innerHTML = "Computer wins!";
        setTimeout(() => {
            alert("Computer wins!")
        }, 50)
    } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        // Player wins
        document.getElementById("outCome").innerHTML = "Player wins!";
        setTimeout(() => {
            alert("Player wins!")
        }, 50)
    }


}

//eventListeners
document.getElementById("rockBtn").addEventListener("click", displayRandomObject);
document.getElementById("paperBtn").addEventListener("click", displayRandomObject);
document.getElementById("scissorsBtn").addEventListener("click", displayRandomObject);

