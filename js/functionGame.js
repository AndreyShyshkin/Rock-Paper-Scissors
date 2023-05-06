let rockBtn = document.querySelector('#rock');
let scissorsBtn = document.querySelector('#scissors');
let paperBtn = document.querySelector('#paper');
let OpponentWait = document.querySelector('.OpponentWait');
let timerid = document.querySelector('#timerid');
let Opponent = document.querySelector('.Opponent');
let rockImg = document.querySelector('.rockImg');
let scissorsImg = document.querySelector('.scissorsImg');
let paperImg = document.querySelector('.paperImg');
let scoreNamber = document.querySelector('#scoreid');
let result = document.querySelector('.result');

let SelectPlayer = 0;
let SelectOpponent = 0;

let scoreUP = 0;

rockBtn.onclick = function(){
    SelectPlayer = "1";
    SelectOpponent = Math.floor(Math.random() * 3) + 1;
    scissorsBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    rockBtn.disabled = true;
    rockBtn.style.pointerEvents = 'none';
    startGame();
}

scissorsBtn.onclick = function(){
    SelectPlayer = 2;
    SelectOpponent = Math.floor(Math.random() * 3) + 1;
    paperBtn.style.display = 'none';
    rockBtn.style.display = 'none';
    scissorsBtn.disabled = true;
    scissorsBtn.style.pointerEvents = 'none';
    startGame();
}

paperBtn.onclick = function(){
    SelectPlayer = 3;
    SelectOpponent = Math.floor(Math.random() * 3) + 1;
    rockBtn.style.display = 'none';
    scissorsBtn.style.display = 'none';
    paperBtn.disabled = true;
    paperBtn.style.pointerEvents = 'none';
    startGame();
}

function startGame() {
    OpponentWait.style.display = 'block';
    let i = 3;
    let timer = setInterval (function(){
        i--;
        timerid.innerText = i;
        if(i == 0) {
            clearInterval(timer)
            EndGame();
        }
    }, 1000)
}

function EndGame() {
    OpponentWait.style.display = 'none';
    Opponent.style.display = "block";
    if(SelectOpponent == 1) {
        rockImg.style.display = "block";
    }else if(SelectOpponent == 2){
        scissorsImg.style.display = "block";
    }else if(SelectOpponent == 3){
        paperImg.style.display = "block";
    }
    if(SelectPlayer == SelectOpponent) {
        result.innerText = "НІЧИЯ(РЕСТАРТ)";
        }else if((SelectPlayer == 3 && SelectOpponent == 1) || (SelectPlayer == 1 && SelectOpponent == 2) || (SelectPlayer == 2 && SelectOpponent == 3)){
        result.innerText = "ПЕРЕМОГА(РЕСТАРТ)"; 
        scoreUP++;
        scoreNamber.innerText = scoreUP;
        }else {
        result.innerText = "ПРОГРАШ(РЕСТАРТ)"; 
        scoreUP--;
        scoreNamber.innerText = scoreUP;
        }
}

result.onclick = function(){
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
    rockBtn.style.pointerEvents = 'auto';
    scissorsBtn.style.pointerEvents = 'auto';
    paperBtn.style.pointerEvents = 'auto';
    Opponent.style.display = "none";
    rockImg.style.display = "none";
    scissorsImg.style.display = "none";
    paperImg.style.display = "none";
    result.innerText = "";
    timerid.innerText = 3;
    rockBtn.style.display = 'block';
    scissorsBtn.style.display = 'block';
    paperBtn.style.display = 'block';
}


