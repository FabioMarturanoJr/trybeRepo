let n = 5;

let star = '*';
let hollow = ' ';
let quad = '';
let quantHollow = 0;

for (let printLin = 0; printLin < n; printLin++) {
  for (let printHoll = 0; printHoll < (n - (printLin + 1)); printHoll++) {
    quad += hollow;
    quantHollow +=1;
  }
  for (let printStar = 0; printStar < (n - quantHollow); printStar++) {
    quad += star;    
  }  
  console.log(quad);
  quad = '';
  quantHollow = 0;
}
