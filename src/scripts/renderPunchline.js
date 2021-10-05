import clearDom from './clearDom';

const renderPunchline = (obj) => {
  clearDom();
  document.querySelector('#app').innerHTML = `
    <h4>${obj}</h4>
    <button type="button" id="newJoke" class="btn btn-primary">New Joke</button>
    `;
};

export default renderPunchline;
