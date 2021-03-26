//1
const assert = require('assert');

const greetPeople = (people) => {
  const greeting = 'Hello';
  let greetPeople = [];
  for (const person in people) {
    greetPeople.push(`${greeting} ${people[person]}`);
  }
  return greetPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

//2
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (characters[index] === 'a' || characters[index] === 'o' || characters[index] === 'i' || characters[index] === 'e' || characters[index] === 'u') {
      results.push(characters[index] = count++);
    } else {
      results.push(characters[index]);
    }   
  }
  return results.join('');
};

const parameter2 = 'Dayane';
const result2 = 'D1y2n3';

assert.strictEqual(removeVowels(parameter2), result2);

//3
const greaterThanTen = (array) => {
  const reorderArr = array.sort((a ,b) => b - a);
  let results = [];
  for (let index = 0; index < 2; index += 1) {
    results.push(reorderArr[index]);
  }
  return results;
};

const parameter3 = [4, 10, 32, 9, 21];
const result3 = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter3), result3);

//4
function secondThirdSmallest(array) {
  const reorderArr = array.sort((a ,b) => a - b);
  let results = []
  for (let index = 1; index < 3; index += 1) {
    results.push(reorderArr[index]);
  }
  return results;
};

const parameter4 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result4 = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter4), result4);
