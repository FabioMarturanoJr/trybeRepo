let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);  
}

//2
let result = 0;
for (let i = 0; i < numbers.length; i++){
  result += numbers[i];  
}
console.log(result);  

//3
let media = result/numbers.length;
console.log(media);  

//4
if(media > 20){
  console.log("Maior q 20");  
}else{
  console.log("Menor q 20");  
}

//5
let numMaior = 0;
for (let i = 0; i < numbers.length; i++){
  if(numMaior < numbers[i])
    numMaior = numbers[i];  
}
console.log(numMaior);

//6
let numImp = [];
for (let i = 0; i < numbers.length; i++){
  if((numbers[i] % 2) != 0){
    numImp.push(numbers[i]);
  }  
}
console.log("Numeros Impares " + numImp);

//7
let numMenor = 1000;
for (let i = 0; i < numbers.length; i++){
  if(numMenor > numbers[i])
    numMenor = numbers[i]; 
}
console.log(numMenor);

//8
for (let i = 1; i < 26; i++){
  console.log(i);  
}

//9
for (let i = 1; i < 26; i++){
  console.log(i/2);  
}