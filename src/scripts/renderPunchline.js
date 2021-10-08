import clearDom from './clearDom';

const renderPunchline = (obj) => {
  clearDom();
  document.querySelector('#app').innerHTML = `
    <h4>${obj.setup}</h4>
    <h4>${obj.delivery}</h4>
    <button type="button" id="newJoke" class="btn btn-primary">New Joke</button>
    `;
};

export default renderPunchline;
