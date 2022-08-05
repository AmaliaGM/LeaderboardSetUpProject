import './style.css';

// ADD NAME AND SCORES
function addElements() {
  const name = document.createElement('li');
  const inputName = document.querySelector('input.nameInput').value;
  const inputScore = document.querySelector('input.scoreInput').value;
  postToApi(inputName, inputScore);

} 
const addButt = document.getElementById('submit')
addButt.addEventListener('click', (e) => {
  e.preventDefault();
  addElements();
  // form.reset();
});

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

// CREATE A REQUEST
const scoreList = document.querySelector('#scoreList');
const input = document.querySelector('div.input');

async function getElement() {
  scoreList.setAttribute('src', input)
}
  const list = document.createDocumentFragment();
  const retrieveFromAPI = async () => {
    const res = await fetch(`${baseUrl}/games/KiAaECHQt9kyqpbrRb7E/scores`);
    const lead = await res.json();
    const leaders = lead.result;
    return leaders;
  };
     
// POST -----------------------------------------------------

const postToApi = async (name, score) => {
  await fetch(`${baseUrl}/games/KiAaECHQt9kyqpbrRb7E/scores`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json());
};
  
  const refresh = document.querySelector('button#refresh');
   refresh.addEventListener('click', retrieveFromAPI);