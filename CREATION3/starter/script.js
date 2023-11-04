'use strict';
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const picture = document.querySelector('.dice');
//
score1.textContent = 0;
score2.textContent = 0;
picture.classList.add('hidden');

//
const scores = [0, 0];
let playing = true;
let activeplayer = 0;
let currentscore = 0;
//

document.querySelector('.btn--roll').addEventListener('click', function () {
  //generator
  if (playing) {
    const IQ = Math.trunc(Math.random() * 6) + 1;
    //
    picture.src = `dice-${IQ}.png`;
    picture.classList.remove('hidden');
    if (IQ !== 1) {
      currentscore = currentscore + IQ;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
    } else {
      currentscore = 0;
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      document.querySelector(`.player--0`).classList.toggle('player--active');
      document.querySelector(`.player--1`).classList.toggle('player--active');
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] = scores[activeplayer] + currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      playing = false;

      document.querySelector(`#score--${activeplayer}`).textContent =
        scores[activeplayer];
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
    } else {
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      currentscore = 0;
      document.querySelector(`.player--0`).classList.toggle('player--active');
      document.querySelector(`.player--1`).classList.toggle('player--active');
    }
  }
});
