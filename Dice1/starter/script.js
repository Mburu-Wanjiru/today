'use strict';
//Selecting element
const score0Ek = document.getElementById('score--0');
const score1Ek = document.getElementById('score--1');
const diceEk = document.querySelector('.dice');
const current0Ek = document.getElementById('current--0');
const current1Ek = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
//Starting condition

diceEk.classList.add('hidden');
let scores, currentscore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentscore = 0;

  activePlayer = 0;
  playing = true;
  score0Ek.textContent = 0;
  score1Ek.textContent = 0;
  current0Ek.textContent = 0;
  current1Ek.textContent = 0;
  diceEk.classList.remove('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
init();
//function

//Rolling dice functionality

//function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    const mat = Math.trunc(Math.random() * 6) + 1;
    diceEk.src = `dice-${mat}.png`;

    diceEk.classList.remove('hidden');

    //; //check for rolled 1;if true,switchto next player
    if (mat !== 1) {
      //add dice to current score
      currentscore += mat;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      //switchto next player
      /*document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');*/
      switchPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    //1;add current score to active players score
    scores[activePlayer] += currentscore;
    // scores[1]=scores[1]+currentscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2:check if players score is >=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEk.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //finish the game
    //switch to the next player

    switchPlayer();
  }
});

document.querySelector('.btn--new').addEventListener(
  'click',
  /* score0Ek.textContent = 0;
  score1Ek.textContent = 0;
  current0Ek.textContent = 0;
  current1Ek.textContent = 0;
  player1.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.add('player--active');
  player1.classList.remove('player--active');*/
  init
);
