import clearDom from './clearDom';

const renderJokes = (obj) => {
  clearDom();
  document.querySelector('#app').innerHTML = `
    <div id="jokebox">
    <h3>Welcome to the Jokebox!</h3>
    <h4>${obj.setup}</h4>
    <button type="button" id="Punchline" class="btn btn-primary joke-button">Punchline</button>
    </div>
    `;
};

export default renderJokes;
