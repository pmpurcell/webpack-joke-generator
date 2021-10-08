import clearDom from './clearDom';

const renderJokes = (obj) => {
  clearDom();
  document.querySelector('#app').innerHTML = `
    <h4>${obj.setup}</h4>
    <button type="button" id="Punchline" class="btn btn-primary">Punchline</button>
    `;
};

export default renderJokes;
