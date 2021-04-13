// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';


function addJoke(joke) {
  const conteinerJokes = document.querySelector('#jokeContainer');
  const p = document.createElement('p');
  p.innerText = joke;
  conteinerJokes.appendChild(p);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => addJoke(data.joke));
};

window.onload = () => fetchJoke();

function dividaNumber(number) {
  const toDivideNubs = [2, 3, 5, 10]
  return toDivideNubs.map((toDivdeNum) => Math.floor(number / toDivdeNum))
}

const promise = new Promise((resolve, reject) => {
  const numbers = [];
  const generateNumber = () => Math.floor(Math.random() * 50);
  for(let i = 0; i < 11; i++){
    numbers.push(Math.pow(generateNumber(), 2));   
  }
  const summation = numbers.reduce((a, b) => a + b);
  if (summation <= 8000) {
    return reject(summation);
  }
  resolve(summation);
})
  .then((number) => console.log(dividaNumber(number)))
  .catch((number) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));