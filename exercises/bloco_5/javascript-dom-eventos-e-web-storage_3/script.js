function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


//1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDaysList(daysToAdd) {
  const ulDays = document.querySelector("#days");
  
  for (let day = 0; day < daysToAdd.length; day++) {
    let elementDays = document.createElement("li");
    elementDays.className = "day";
    elementDays.innerText = daysToAdd[day];

    if((daysToAdd[day] == 24) || (daysToAdd[day] == 25) || (daysToAdd[day] == 31)){
      elementDays.className += " holiday";
    }
    if((daysToAdd[day] == 4) || (daysToAdd[day] == 11) || (daysToAdd[day] == 18) || (daysToAdd[day] == 25)) {
      elementDays.className += " friday";
    }

    ulDays.appendChild(elementDays);
  }
}

addDaysList(dezDaysList);

//2 - 4 
function toMkButton(nameButton, idButton){
  const contButton = document.querySelector("div.buttons-container");
  let mkButton = document.createElement("button");
  mkButton.innerHTML = nameButton;
  mkButton.id = idButton;
  contButton.appendChild(mkButton);
}

toMkButton("Feriados", "btn-holiday");

toMkButton("Sexta-feira", "btn-friday");

//3
const holidayButton = document.querySelector("#btn-holiday");

holidayButton.addEventListener("click", holiClick);
let toColorH = true;

function holiClick() {
  let toColorHolidays = document.querySelectorAll(".holiday");
  
  if (toColorH) {
    for (let i = 0; i < toColorHolidays.length; i++) {
      toColorHolidays[i].style.backgroundColor = "green";    
      toColorHolidays[i].style.color = "white";    
    }
    toColorH = false;
  } else {
    for (let i = 0; i < toColorHolidays.length; i++) {
      toColorHolidays[i].style.backgroundColor = "rgb(238,238,238)";
      toColorHolidays[i].style.color = "#777";    
    }
    toColorH =true;
  }
}

//5 
const fridayButton = document.querySelector("#btn-friday");

fridayButton.addEventListener("click", fridayClick);
let toTextFri = true;
let bkpDays = [];

function fridayClick() {
  let toTextFriday = document.querySelectorAll(".friday");

  if (toTextFri) {
    for (let i = 0; i < toTextFriday.length; i++) {
      bkpDays[i] = toTextFriday[i].innerText;
      toTextFriday[i].innerText = "SEXTOU";  
    }
    toTextFri = false;
  } else {
    for (let i = 0; i < toTextFriday.length; i++) {
      toTextFriday[i].innerText = bkpDays[i];
    }
    toTextFri =true;
  }
}

//6
const calendarDays = document.querySelectorAll(".day");

for (let i = 0; i < calendarDays.length; i++) {
  calendarDays[i].addEventListener("mouseover", doZoom);
  function doZoom() {
    // console.log("Passou");
    calendarDays[i].style.fontSize = "30px";
    calendarDays[i].style.margin = "-1px 0 -1px 0";
  }

  calendarDays[i].addEventListener("mouseleave", doZoomOut);
  function doZoomOut() {
    // console.log("Saiu");
    calendarDays[i].style.fontSize = "20px";
    calendarDays[i].style.margin = "5px 0 5px 0";
  }  
}


//7
const myTasks = document.querySelector(".my-tasks");

function addMyTasks(task){
  let myTask = document.createElement("span");
  myTask.innerText =  "\n"+task;
  myTasks.appendChild(myTask);
}

addMyTasks("Estudar os Exercicios");

//8
function addDivColor(color){
  let colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor = color;
  colorDiv.className = "divColored"
  myTasks.appendChild(colorDiv);
}
addDivColor("red");

//9
let allColorDivs = document.querySelectorAll(".divColored");
let taskDivColor = false;

allColorDivs[0].addEventListener("click", function () {
  if(!taskDivColor){
    allColorDivs[0].className += " task selected";
    taskDivColor = true;
  }else {
    allColorDivs[0].className = allColorDivs[0].className.replace(" task selected", "") ;
    taskDivColor = false;
  }
});

//10
