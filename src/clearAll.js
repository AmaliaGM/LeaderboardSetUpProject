function clearScreen() {
  const list = document.querySelector('ul#scoreList');
  for (let i = 0; i < list.length; i += 1) {
    console.log('we did it');
  }
  return list;
}
const clearButt = document.querySelector('button#refresh');
clearButt.addEventListener('click', clearScreen);

module.exports = clearScreen;