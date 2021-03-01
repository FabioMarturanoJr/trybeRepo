let n = 5;

let star = '*';
let hollow = ' ';

let quad = ' ';

for (let printLin = 0; printLin < n; printLin++) {
    for (let printCol = 0; printCol < (printLin +1); printCol++) {
    quad += star;
  }
  console.log(quad);
  quad = hollow;
}

