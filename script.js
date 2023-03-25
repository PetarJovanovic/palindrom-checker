const button = document.querySelector('.btn');
const result = document.querySelector('.result');

button.addEventListener('click', palindromChecker);

function correctAnswer() {
  const correct = document.createElement('i');
  correct.classList.add('fa-sharp', 'fa-solid', 'fa-circle-check');
  correct.style.color = '#13a036';
  result.innerHTML = '';
  result.appendChild(correct);
}

function incorrectAnswer() {
  const incorrect = document.createElement('i');
  incorrect.classList.add('fa-circle-xmark', 'fa-solid');
  incorrect.style.color = '#f44336';
  result.innerHTML = '';
  result.appendChild(incorrect);
}

function palindromChecker() {
  const word = document.querySelector('.input-text').value.toLowerCase();

  if (!word.length) {
    result.innerHTML = 'You have to type word first';
  } else {
    const temp = word.split(' ').join('');
    const temp1 = temp.split('').reverse().join('');

    if (temp === temp1) correctAnswer();
    else incorrectAnswer();
  }
}
