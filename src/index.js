import './style.css';


// CREATE A REQUEST
async function getData() {
  const response = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api');
  const data = await response.json();

 data = JSON.parse(response)
 data.forEach(name => {
  console.log(name.score)
});
 } 
//getData(); 

const scoreList = document.querySelector('#scoreList');
const input = document.querySelector('div.input');

async function getElement(input) {
  scoreList.setAttribute('src', input)
}
  const list = document.createDocumentFragment();
   const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  fetch(url, {
  method: 'GET',
  body: JSON.stringify(input), 
  name: 'Amalia',
  score: '3483598450894',
  headers: new Headers({
    'Content-Type': 'application/json; charset-UTF-8',
  })
  .then((response) => response.json())
  .then(input => {
    addElements(input);
  })
  })

// POST 
 function postElement(input) {
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: JSON.stringify(input),
  headers: new Headers({
    'Content-Type': 'application/json; charset-UTF-8',
    name: 'Amalia',
    score: '3483598450894'
  })
  .then((response) => response.json())
  .then(input => {
    addElements(input);
  })
}) 
  } 

// ADD NAME AND SCORES
  function addElements() {
  const name = document.createElement('li');
  const inputName = document.querySelector('input.nameInput').value;
  const inputScore = document.querySelector('input.scoreInput').value;
  const t = document.createTextNode(inputName);
  const nameList = document.getElementById('scoreList');
  const s = document.createTextNode(inputScore);
  name.appendChild(t);
  name.appendChild(s);
  nameList.appendChild(name);
} 

const addButt = document.getElementById('submit');
addButt.addEventListener('click', (addElements));

const refresh = document.querySelector('button#refresh');
refresh.addEventListener('click', getData);