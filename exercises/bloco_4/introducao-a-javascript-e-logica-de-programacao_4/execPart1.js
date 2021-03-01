let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
};

// 1
console.log(`Bem-vinda, ${info.personagem}`);

//2
console.log(info);

//3
for (let key in info) {
  console.log(key);
}

//4
for (let key in info) {
  console.log(info[key]);
}

//5
for (let key in info) {
  if(info[key]=='Sim'&&info2[key]=='Sim'){
    console.log('Ambos recorrentes');
  }else if(info[key]==='não'&&info2[key]==='não'){
    console.log('Ambos não recorrentes');
  }else{
    console.log(info[key] + ' e ' + info2[key]);
  }
}
