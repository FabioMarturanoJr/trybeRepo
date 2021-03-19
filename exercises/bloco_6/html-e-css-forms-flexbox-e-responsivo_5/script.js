const catFigures = document.querySelectorAll("figure");

// catFigures[0].style.backgroundColor = "black"

for (let color = 0; color < catFigures.length; color++) {
  
  if(color%2 == 0){
    catFigures[color].style.backgroundColor = '#B6E2D3'
  } else {
    catFigures[color].style.backgroundColor = '#D8A7B1'
  }  
}