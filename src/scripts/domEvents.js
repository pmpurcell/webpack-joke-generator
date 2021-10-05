import getJoke from './helpers/jokeData';
import renderJokes from './renderJoke';
import renderPunchline from './renderPunchline';

const domEvents = (joke) => {
  document.querySelector('#app').addEventListener('click', ((e) => {
    if (e.target.id.includes('jokeButton')) {
      console.warn(joke);
      renderJokes(joke.setup);
    }
    if (e.target.id.includes('Punchline')) {
      console.warn('Clicked punchline button');
      renderPunchline(joke.delivery);
    }
    if (e.target.id.includes('newJoke')) {
      getJoke().then((newJoke) => renderJokes(newJoke.setup));
    }
  }));
};

export default domEvents;
