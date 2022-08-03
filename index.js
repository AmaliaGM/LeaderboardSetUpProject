// ADD NAME AND SCORES
function addElements() {
    let name = document.createElement('li'); 

    let inputName = document.querySelector('input.nameInput').value;
    let inputScore = document.querySelector('input.scoreInput').value;
    let t = document.createTextNode(inputName);
    let nameList = document.getElementById('scoreList');
    let s = document.createTextNode(inputScore);
    name.appendChild(t);
    name.appendChild(s);
    nameList.appendChild(name)
   
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

      let addButt = document.getElementById('submit');
    addButt.addEventListener('click', addElements);

    function clearScreen() {
        let list = document.querySelector('ul#scoreList')
        for (let i = 0; i < list.length; i += 1) {
            console.log("we did it")
        }
        return list
    }
      let clearButt = document.querySelector('button#refresh');
      clearButt.addEventListener('click', clearScreen);