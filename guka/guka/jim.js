'use strict';

const private = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const display = function (message) {
  document.querySelector('.message').textContent = message;
};

/*document.querySelector('.check').addEventListener('click', function () {
  let num = Number(document.querySelector('.guess').Value);
  if (!num) {
    display('please insert an imput');
    document.querySelector('.score').textContent = 0;
    document.querySelector('.highscore').textContent = 0;
  } else if (num === private) {
    document.querySelector('.number').textContent = private;
    display('congratulations');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.score').textContent = highscore;
    }
  } else if (num !== private) {
    if (score > 1) {
      display(num > private ? `the imput is too high` : `the imput is too low`);
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      display('game over');
      document.querySelector('.highscore').textContent = 0;
      document.querySelector('.score').textContent = 0;
    }
  }
});*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
///////INVOKING LOAD BUTTON FUNCTIONALITY
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  ///////////// when no imput added
  if (!guess) {
    ////////document.querySelector('.message').textContent = 'Who do you think you are?';
    displaymessage('Who do you think you are?');

    document.querySelector('.score').textContent = 0;

    ///////////////when imput = secretNumber
  } else if (guess === secretNumber) {
    ///////document.querySelector('.message').textContent = 'CONGRATULATION';
    displaymessage('CONGRATULATIONS');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#361cc9';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  /*
  /////////// WHEN IMPUT GREATER THAN SECRETNUMBER
    //////////and checking number of iteration to exit

  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'HIGH ME';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'TIME OUT DUDE';
    }
  }
  /////////// WHEN IMPUT LESS THAN SECRETNUMBER
  //////////and checking number of iteration to exit
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'LOW ME';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'TIME OUT DUDE';
    }
  }*/

  ///////////implementing using ternary operator
  else if (guess !== secretNumber) {
    if (score > 1) {
      /////document.querySelector('.message').textContent =
      /////guess > secretNumber ? 'HIGH ME' : 'LOW ME';

      displaymessage(guess > secretNumber ? 'HIGH ME' : 'LOW ME');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //////// document.querySelector('.message').textContent = 'TIME OUT DUDE';
      displaymessage('TIME OUT DUDE');

      document.querySelector('.score').textContent = 0;
      document.querySelector('.highscore').textContent = 0;
    }
  }
});

////////REVERSING THE PROCESS TO DEFAULT BY AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  ////////document.querySelector('.message').textContent = 'TRY TO RATE ME';
  displaymessage('TRY TO RATE ME');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#7f9b19';
  document.querySelector('.number').style.width = '15rem';
});
