const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


//1
function addTurno(lesson, theKey, theValue){
  const toAdd = {
    [theKey]: theValue
  };
  Object.assign(lesson, toAdd);
}

// console.log(lesson2);

addTurno(lesson2, 'turno', 'manhã');

// console.log(lesson2);

//2
function listKeys(lesson) {
  const keys = Object.keys(lesson);
  return keys;
}

// console.log(listKeys(lesson2));

//3
function sizeObj(lesson) {
  return Object.keys(lesson).length;
}

// console.log(sizeObj(lesson2));

//4
function listObjs(lesson) {
  const values = Object.values(lesson);
  return values;
}

// console.log(listObjs(lesson2));

//5
const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

// console.log(allLessons);

//6
function totalAlunos(lessons) {
  const theLessons = Object.keys(lessons);
  let totalEstudantes = 0;
  for (const lesson in theLessons) {
    totalEstudantes  += allLessons[theLessons[lesson]].numeroEstudantes;
  }
  return totalEstudantes
}

// console.log(totalAlunos(allLessons));

//7
function getValueByNumber(lesson, key) {
  return Object.values(lesson)[key];
}

// console.log(getValueByNumber(lesson1, 0));

//8
function verifyPair(lesson, theKey, theValue) {
  let result = false;
  for(let [key, value] of Object.entries(lesson)){
    ((key === theKey) && (value === theValue)) ? result = true : null;
  }
  return result;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));