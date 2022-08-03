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
addButt.addEventListener('click', addElements);

module.exports = addElements;
