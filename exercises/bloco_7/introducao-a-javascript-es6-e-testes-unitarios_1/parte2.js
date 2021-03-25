//1
function showFatoral(num) {
  let result = 1;
  for(let i = num; i > 1; i--){
    result *= i; 
  }
  return result;
}

console.log(showFatoral(5));

function recursivoFatoral(n) {
  return (n===1) ? 1 : n * recursivoFatoral(n -1);
}

console.log(recursivoFatoral(5));

//2
function longestWord(phrase) {
  let longest = 0;
  let words = phrase.split(' ');
  for(let word = 0; word < words.length; word++){
    longest = (words[word].length > words[longest].length) ? word : longest;
  }
  return words[longest];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

//3 clickCount fazer

//4
function switchWord(phrase, toSwitch) {
  let words = phrase.split(' ');
  for(word in words){
    (words[word] === 'x') ? words[word] = toSwitch : null;
  }
  return words.join(' ');
}

console.log(switchWord('Tryber x aqui!', 'Bebeto'));