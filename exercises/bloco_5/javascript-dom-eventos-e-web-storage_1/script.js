/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// 1
document.getElementById("title").innerText = "Troca com Id";

document.getElementsByClassName("main-content")[0].style.backgroundColor = "grey";

let tagP = document.getElementsByTagName("p");
for (let i = 0; i < tagP.length; i++) {
  tagP[i].style.color = "grey"  
}

//2
function changeDesc(element) {
  element.innerText = "estarei bem";
}
changeDesc(document.querySelector("p"));

//3
function changeColor(element, color) {
  element.style.backgroundColor = color;
}
changeColor(document.querySelector("div"), "rgb(76,164,109)");

//4
changeColor(document.querySelector(".center-content"), "white");

//5
function changeText(element, text) {
  element.innerText = text;
}
changeText(document.querySelector("h1"), "Exercicios de DOM");

//6-7
function lowCase(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    text[i].innerText = text[i].innerText.toLowerCase();
  }
}
lowCase(document.querySelectorAll("p"));

