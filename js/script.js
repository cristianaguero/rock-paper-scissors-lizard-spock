
// variables

const userPic = document.querySelector('.user__choice img');
const computerPic = document.querySelector('.computer__choice img');
let result = document.querySelector('.result_shown');

let userChoice;
let computerChoice;


const win = document.querySelector('.win');
const lost = document.querySelector('.lost');
const draw = document.querySelector('.draw');
const total = document.querySelector('.total');

let winning = 0;
let losses = 0;
let draws = 0;
let sum = 0;


//buttons 

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const lizard = document.querySelector('.lizard');
const spock = document.querySelector('.spock');

const restart = document.querySelector('.restart');

//functions

function randomChoice() {
    let number = Math.ceil(Math.random() * 5);
    switch(number) {
        case 1:
            computerPic.src = './img/rock.png';
            computerChoice = 'rock';
            break;
        case 2:
            computerPic.src = './img/paper.png';
            computerChoice = 'paper';
            break;
        case 3:
            computerPic.src = './img/scissors.jpg';
            computerChoice = 'scissors';
            break;
        case 4:
            computerPic.src = './img/lizard.jpg';
            computerChoice = 'lizard';
            break;
        case 5:
            computerPic.src = './img/spock.jpg';
            computerChoice = 'spock';
            break;
            default:
            computerPic.src = './img/ready.png';
    }

}


function figth() {
    if(userChoice === computerChoice) {
        result.innerHTML = "It's a draw.";
    } else if(userChoice === 'scissors' && computerChoice === 'paper') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'paper' && computerChoice === 'rock') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'lizard' && computerChoice === 'spock') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'spock' && computerChoice === 'scissors') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'scissors' && computerChoice === 'lizard') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'lizard' && computerChoice === 'paper') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'paper' && computerChoice === 'spock') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'spock' && computerChoice === 'rock') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'rock' && computerChoice === 'scissors') {
        result.innerHTML = 'You Win!!!';
    } else if(userChoice === 'rock' && computerChoice === 'lizard') {
        result.innerHTML = 'You Win!!!';
    } else {
        result.innerHTML = 'You Lose....';
    }
}


function score() {
    if(result.innerHTML === 'You Win!!!') {
        winning++;
        sum++;
        win.innerHTML = winning;
        total.innerHTML = sum;
    } else if(result.innerHTML === 'You Lose....') {
        losses++;
        sum--;
        lost.innerHTML = losses;
        total.innerHTML = sum;
    } else {
        draws++;
        draw.innerHTML = draws;
    }
}

function clean() {
    restart.addEventListener('click', () => {
        winning = 0;
        win.innerHTML = winning;
        losses = 0;
        lost.innerHTML = losses;
        draws = 0;
        draw.innerHTML = draws;
        sum = 0;
        total.innerHTML = sum;
        userPic.src = './img/ready.png';
        computerPic.src = './img/ready.png';
    })
}

//game

clean()

rock.addEventListener('click', () => {
    userPic.src = './img/rock.png';
    userChoice = 'rock';
    randomChoice();
    figth();
    score();
    
})

paper.addEventListener('click', () => {
    userPic.src = './img/paper.png';
    userChoice = 'paper';
    randomChoice();
    figth();
    score();
})

scissors.addEventListener('click', () => {
    userPic.src = './img/scissors.jpg';
    userChoice = 'scissors';
    randomChoice();
    figth();
    score();
})

lizard.addEventListener('click', () => {
    userPic.src = './img/lizard.jpg';
    userChoice = 'lizard';
    randomChoice();
    figth();
    score();
})

spock.addEventListener('click', () => {
    userPic.src = './img/spock.jpg';
    userChoice = 'spock';
    randomChoice();
    figth();
    score();
})





