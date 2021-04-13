const numbers = [];
const generateNumber = () => Math.floor(Math.random() * 50);
for(let i = 0; i < 11; i++){
  numbers.push(Math.pow(generateNumber(), 2));   
}
console.log(`numbers ${numbers}`)