let selecEstados = document.querySelector("#estado");

let estadoSiglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

let estados = [ 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins' ]

function populaEstados (){
  for (let est = 0; est < estados.length; est++) {
    let estado = document.createElement("option");
    estado.value = estadoSiglas[est];
    estado.innerHTML = estados[est]
    selecEstados.appendChild(estado);
  }
}

populaEstados();

let dataInicial = document.querySelector("#dataIni");

dataInicial.addEventListener('focusout', () => {
  let day = parseInt(dataInicial.value.substring(0, 2));
  let mes = parseInt(dataInicial.value.substring(3, 5));
  let ano = parseInt(dataInicial.value.substring(6));

  if(dataInicial.value.length != 10){
    alert("Quantidade de Caractes da 'Data inícial' Incorreto, verifique.");
  } else if (!(day > 0) || !(day < 32)) {
    alert("Dia data inicial errado, verifique.")
  } else if (!(mes > 0) || !(mes < 13)) {
    alert("Mês data inicial errado, verifique.")
  } else if (!ano > 0) {
    alert("Ano data inicial errado, verifique.")
  }

});

const buttonSubmit  = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  claerConsolidado();
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const div = document.createElement('div');
    div.className = 'div-curriculum';
    div.innerHTML = userInput;
    const consolidado = document.querySelector("#consolidado");
    
    consolidado.appendChild(div);
  }
});

const buttonClear = document.querySelector("#clear");

buttonClear.addEventListener("click", () => {
  claerConsolidado();
});

function claerConsolidado () {
  const consolidado = document.querySelector("#consolidado");
  consolidado.innerHTML = '';
}