// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domEvents from './domEvents';
import jokeData from './helpers/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div id="jokebox">
  <h4>Welcome to the Jokebox!</h4>
  <button type="button" id="jokeButton" class="btn btn-primary">Get Joke</button>
  </div>
  `;
  jokeData().then(domEvents);
};

init();
