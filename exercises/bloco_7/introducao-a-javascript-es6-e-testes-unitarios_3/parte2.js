//1
const assert = require('assert');
// escreva a função addOne aqui

function addOne(arrOriginal) {
  let newArr = [];
  for(arr in arrOriginal){
    newArr.push(arrOriginal[arr] + 1);
  }
  return newArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//2
// escreva a função wordLengths aqui

const wordLengths = (words) => {
  let theLengths = [];
  for(word in words){
    theLengths.push(words[word].length);
  } 
  return theLengths;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expecteds = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const outputs = wordLengths(words);
assert.deepStrictEqual(outputs, expecteds);

//3
// escreva a função sumAllNumbers aqui

function sumAllNumbers(numbers) {
  const reducer = (acc, curr) => acc + curr;
  return numbers.reduce(reducer);
}

const numbers = [9, 23, 10, 3, 8];
const expectedd = 53;
const outputt = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(outputt, expectedd);

//4
// escreva a função findTheNeedle aqui
function findTheNeedle(words, toCompare) {
  let theSame = -1;
  for(word in words){
    theSame = (words[word] === toCompare) ? word : theSame;
  } 
  return parseInt(theSame, 10);
}

let Needlewords = ['house', 'train', 'slide', 'needle', 'book'];
let eexpected = 3;
let ooutput = findTheNeedle(Needlewords, 'needle');
assert.strictEqual(ooutput, eexpected);

Needlewords = ['plant', 'shelf', 'arrow', 'bird'];
eexpected = 0;
ooutput = findTheNeedle(Needlewords, 'plant');
assert.strictEqual(ooutput, eexpected);

Needlewords = ['plant', 'shelf', 'arrow', 'bird'];
eexpected = -1;
ooutput = findTheNeedle(Needlewords, 'plat');
assert.strictEqual(ooutput, eexpected);
