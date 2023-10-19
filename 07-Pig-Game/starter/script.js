'use strict';
const scores1 = document.querySelector('#score--0');
const scores2 = document.querySelector('#score--1');
const picture = document.querySelector('.dice');
const curr1 = document.querySelector('#current--1');
const curr2 = document.querySelector('#current--0');

//
scores1.textContent = 0;
scores2.textContent = 0;
picture.classList.add('hidden');
//
const switchplayer = function () {
  currentscore = 0;
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};
const scores = [0, 0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
//
document.querySelector('.btn--roll').addEventListener('click', function () {
  //random number
  if (playing) {
    const IQ = Math.trunc(Math.random() * 6) + 1;
    //display

    picture.classList.remove('hidden');
    picture.src = `dice-${IQ}.png`;
    if (IQ !== 1) {
      currentscore = currentscore + IQ;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
    } else {
      //switch player
      /*currentscore = 0;
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');*/
      switchplayer();
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] = scores[activeplayer] + currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
  }
  if (scores[activeplayer] >= 20) {
    playing = false;
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
  } else {
    switchplayer();
  }
});
