let btnOpenModal = document.querySelector(".container__rules")
let modalWindow = document.querySelector(".modal")
let modalOverlay = document.querySelector(".modal__overlay")
let modalCloseImg = document.querySelector(".modal__closeIcon")
let paper = document.querySelector(".gameContent__gameChoice--isPaper")
let scissors = document.querySelector(".gameContent__gameChoice--isScissors")
let rock = document.querySelector(".gameContent__gameChoice--isRock")
let gameContent = document.querySelector(".gameContent")
let countDownText = document.querySelector(".gameContent__countdownText")
let gameChoiceComputer = document.querySelector(".gameContent__gameChoice--isComputer")
let gameChoiceComputerImage = document.querySelector(".gameContent__gameChoiceImage")
let resultText = document.querySelector(".gameContent__resultText")
let scoreNumber = document.querySelector(".header__scoreNumber")
let restartBtn = document.querySelector(".gameContent__resultButton")

let choiceComputer = 0;
let choicePlayer = 0;
let score = 0;

btnOpenModal.onclick = function() {
    modalWindow.classList.add("modal--isActive");
}

modalOverlay.onclick = function() {
    modalWindow.classList.remove("modal--isActive");
}

modalCloseImg.onclick = function() {
    modalWindow.classList.remove("modal--isActive");
}

paper.onclick = function(e) {
    startChoice(e.target, 1)
}

scissors.onclick = function(e) {
    startChoice(e.target, 2)
}

rock.onclick = function(e) {
    startChoice(e.target, 3)
}

function startChoice(name, num) {
    gameContent.classList.add("gameContent--isActive")
    name.classList.add("gameContent__gameChoice--isActive")
    choiceComputer = Math.floor(Math.random() * 3) + 1;
    choicePlayer = num;
    let timer = "3";
    let timerID = setInterval(function() {
        timer--;
        countDownText.innerText = timer;
        if (timer === 0) {
            clearInterval(timerID);
            countDownText.innerText = "";
            startGame()
        }
    }, 1000)
}

function startGame() {
    if(choiceComputer === 1){
        gameChoiceComputer.classList.add("gameContent__gameChoice--isPaper")
        gameChoiceComputerImage.src = "./images/icon-paper.svg";
        result()
    }else if(choiceComputer === 2){
        gameChoiceComputer.classList.add("gameContent__gameChoice--isScissors")
        gameChoiceComputerImage.src = "./images/icon-scissors.svg";
        result()
    }else if(choiceComputer === 3){
        gameChoiceComputer.classList.add("gameContent__gameChoice--isRock")
        gameChoiceComputerImage.src = "./images/icon-rock.svg";
        result()
    }
}

function result(){
    gameContent.classList.add("gameContent--revealResult")
    if(choicePlayer === choiceComputer) {
        resultText.innerText = "Draw"
        restart()
    }else if((choicePlayer === 1 && choiceComputer === 3) || (choicePlayer === 2 && choiceComputer === 1) || (choicePlayer === 3 && choiceComputer === 2)){
        resultText.innerText = "Win"
        score++;
        scoreNumber.innerText = score
        restart()
    }else {
        resultText.innerText = "Loses"
        if (score === 0) {
            scoreNumber.innerText = 0;
        } else {
            score--;
            scoreNumber.innerText = score;
        }
        restart()
    }
}

function restart(){
    restartBtn.onclick = function() {
        gameContent.classList.remove("gameContent--isActive","gameContent--revealResult")
        let ActiveElements = document.querySelector(".gameContent__gameChoice--isActive")
        ActiveElements.classList.remove("gameContent__gameChoice--isActive")
        countDownText.innerText = "3";
        if(choiceComputer === 1){
            gameChoiceComputer.classList.remove("gameContent__gameChoice--isPaper")
            gameChoiceComputerImage.src = "";
        }else if(choiceComputer === 2){
            gameChoiceComputer.classList.remove("gameContent__gameChoice--isScissors")
            gameChoiceComputerImage.src = "";
        }else if(choiceComputer === 3){
            gameChoiceComputer.classList.remove("gameContent__gameChoice--isRock")
            gameChoiceComputerImage.src = "";
        }
    }


}

