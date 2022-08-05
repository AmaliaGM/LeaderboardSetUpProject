import './style.css';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
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

// ADD NAME AND SCORES
const addElements = () => {
  const inputName = document.querySelector('input.nameInput').value;
  const inputScore = document.querySelector('input.scoreInput').value;
  postToApi(inputName, inputScore);
}
const addButt = document.getElementById('submit');
addButt.addEventListener('click', (e) => {
  e.preventDefault();
  addElements();
  // form.reset();
});

// CREATE A REQUEST
const retrieveFromAPI = async () => {
  const res = await fetch(`${baseUrl}/games/KiAaECHQt9kyqpbrRb7E/scores`);
  const lead = await res.json();
  const leaders = lead.result;
  return leaders;
};
const leaderBoardWrapper = document.getElementById('scoreList');
const scoreBoard = ({ user, score }) => {
  leaderBoardWrapper.innerHTML += `<li class="animated bounce"><span>${user}</span><span class="span">${score}</span></li>`;
};

const displayScores = async () => {
  const scores = await retrieveFromAPI();
  scores.forEach((score) => {
    scoreBoard(score);
  });
};

const refresh = document.querySelector('button#refresh');
refresh.addEventListener('click', displayScores);