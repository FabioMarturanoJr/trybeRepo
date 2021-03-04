
//1
function palin (word){
  for(var i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length - i - 1]){
     return false;
    }
  }
  return true;
}

console.log(palin('carro'));

//2
function indexMaxValue(myArray){
  let verifyNum = myArray[0];
  for (let i = 1; i < myArray.length; i++) {
    if(verifyNum < myArray[i]){
      verifyNum = myArray[i];
    }
  }
  let indexMaxReturn
  for (let i = 0; i < myArray.length; i++) {
    if(verifyNum == myArray[i]){
      indexMaxReturn = myArray.indexOf(myArray[i]);
    }    
  }
  return indexMaxReturn;
}

let arrayTest = [2, 23, 6, 7, 10, 10];

console.log(indexMaxValue(arrayTest));

//3
function indexMinValue(myArray){
  let verifyNum = myArray[0];
  for (let i = 1; i < myArray.length; i++) {
    if(verifyNum > myArray[i]){
      verifyNum = myArray[i];
    }
  }
  let indexMinReturn
  for (let i = 0; i < myArray.length; i++) {
    if(verifyNum == myArray[i]){
      indexMinReturn = myArray.indexOf(myArray[i]);
    }    
  }
  return indexMinReturn;
}

console.log(indexMinValue(arrayTest));

//4
function longName (listNames){
  let verifyNames = listNames[0].length;
  let theLongName = '';
  for (let i = 1; i < listNames.length; i++) {
    if(verifyNames < listNames[i].length){
      verifyNames = listNames[i].length;
      theLongName = listNames[i];
    }    
  }
  return theLongName;
}

let myListNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana','FabioMarturano'];

console.log(longName(myListNames));

//5
function caracOccurre (listCarc){
  let quantyOccurre = 0;
  let maxQuantyOccurre = 0;
  let caracMaxOccurre;
  for (let numVerificado = 0; numVerificado < listCarc.length; numVerificado++) {
    for (let numVerificando = 0; numVerificando < listCarc.length; numVerificando++){
      if(listCarc[numVerificado] == listCarc[numVerificando]){
        quantyOccurre++;
      }
    }
    if(maxQuantyOccurre < quantyOccurre){
      caracMaxOccurre = listCarc[numVerificado];
      maxQuantyOccurre = quantyOccurre;
    }
    quantyOccurre =0
  }
  return maxQuantyOccurre;
}

let myListCarac = [2, 3, 2, 5, 8, 2, 3];

console.log(caracOccurre(myListCarac));

//6
function addNum(number){
  let addMynumber = 0;
  for (let i = 1; i <= number; i++) {
    addMynumber += i;
  }
  return addMynumber;
}

let Mynumber = 5;

console.log(addNum(Mynumber));

//
