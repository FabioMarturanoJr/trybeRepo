//1
const mkEmployeer = (nameComplete, email) => ({ 
  nameComplete, 
  email: nameComplete.replace(/\s/g, '.') + email, 
});

// console.log(mkEmployeer('fabio marturano', '@trybe.com'))


const newEmployees = (event) => {
  const employees = {
    id1: event('Pedro Guerra', '@trybe.com'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: event('Luiza Drumond', '@trybe.com'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: event('Carla Paiva', '@trybe.com'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

// console.log(newEmployees(mkEmployeer));

//2
const randomNumber = () => Math.floor(Math.random() * 99 + 1);

const sorteio = (numBet) => (numRandom) => numBet === numRandom();

const oneInTen = (tryAgain) => {
  let count = 0;
  while (!tryAgain) {
    const numbBet = sorteio(randomNumber());
    const resultBet = numbBet(randomNumber);
    count++;
    tryAgain = resultBet;
  }
  return count;
};

// console.log(`Tentativas Até os numeros Baterem: ${oneInTen(false)}`);

//3
const checkAnswer = (feedback) => (answer) => feedback.toLowerCase() === answer.toLowerCase();

const feedback = checkAnswer('Quarenta e dois');

const answer = 'quarenta e dois';

// console.log(feedback(answer));

//4
const criaArray = (text ,lengthArr) => {
  const arrayDone = [];
  for (arr = 0; arr < lengthArr; arr += 1) {
    arrayDone.push(`${text}${arr}`);
  }
  return arrayDone;
};

const arrayFeedbacks = criaArray('Item', 10);
const arrayAnswers = criaArray('Item', 10);

const checkAnswers = (feedbacks) => (answers) => (checkerAnswers) => checkerAnswers(feedbacks, answers);

const verificaArrays = (arrOne, arrTwo) => {
  let corectAnswers = 0;
  for (let ans in arrOne) {
    arrOne[ans] === arrTwo[ans] ? corectAnswers += 1 : null;
  }
  return corectAnswers;
};

const feedtoCheck = checkAnswers(arrayFeedbacks);
const theArraysToCheck = feedtoCheck(arrayAnswers);

// console.log(theArraysToCheck(verificaArrays));


