import './style.css';

// ADD NAME AND SCORES
export default function addElements() {
  const name = document.createElement('li');
  const inputName = document.querySelector('input.nameInput').value;
  const inputScore = document.querySelector('input.scoreInput').value;
  const t = document.createTextNode(inputName);
  const nameList = document.getElementById('scoreList');
  const s = document.createTextNode(inputScore);
  name.appendChild(t);
  name.appendChild(s);
  nameList.appendChild(name);

  /*          if (name !== undefined) {
         name = JSON.stringify(inputName, null, 2);
         score = JSON.stringify(inputScore, null, 2);
    }
        document.getElementsByClassName('nameInput').value;
        document.getElementsByClassName('scoreInput').values;
 */
  /* for (let i = 0; i < scoreList.length; i += 1) {
          console.log(scoreList[i]);
        }
 */
}

const addButt = document.getElementById('submit');
addButt.addEventListener('click', addElements);

module.exports = addElements;