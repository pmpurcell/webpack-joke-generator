import clearDom from './clearDom';

const renderPunchline = (obj) => {
  clearDom();
  document.querySelector('#app').innerHTML = `
    <div id="jokebox">
    <h3>Welcome to the Jokebox!</h3>
    <h4>${obj.setup}</h4>
    <h6>${obj.delivery}</h6>
    <button type="button" id="newJoke" class="btn btn-primary joke-button">New Joke</button>
    </div>
    `;
};

export default renderPunchline;
