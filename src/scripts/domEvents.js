import getJoke from './helpers/jokeData';
import renderJokes from './renderJoke';
import renderPunchline from './renderPunchline';

const domEvents = () => {
  let joke = {};
  const setJoke = (obj) => {
      joke = {
          setup: obj.setup,
          delivery: obj.delivery
      };
  }
  document.querySelector('#app').addEventListener('click', ((e) => {
    if (e.target.id.includes('jokeButton' || 'newJoke')) {
      getJoke().then(setJoke);
      renderJokes(joke.setup);
    }
    if (e.target.id.includes('Punchline')) {
      console.warn('Clicked punchline button');
      renderPunchline(joke.delivery);
    }
  }));
};

export default domEvents;
