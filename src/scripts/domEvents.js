import getJoke from './helpers/jokeData';
import renderJokes from './renderJoke';
import renderPunchline from './renderPunchline';

const domEvents = () => {
  let joke = {};
  const setJoke = (obj) => {
    joke = {
      setup: obj.setup,
      delivery: obj.delivery,
    };
  };
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('jokeButton') || e.target.id.includes('newJoke')) {
      getJoke().then((response) => {
        setJoke(response);
        console.warn(joke);
        renderJokes(joke);
      });
    }
    if (e.target.id.includes('Punchline')) {
      console.warn('Clicked punchline button');
      renderPunchline(joke);
    }
  });
};

export default domEvents;
