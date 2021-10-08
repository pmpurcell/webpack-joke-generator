// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domEvents from './domEvents';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div id="jokebox">
  <h3>Welcome to the Jokebox!</h3>
  <button type="button" id="jokeButton" class="btn btn-primary joke-button">Get Joke</button>
  </div>
  `;
  domEvents();
};

init();
