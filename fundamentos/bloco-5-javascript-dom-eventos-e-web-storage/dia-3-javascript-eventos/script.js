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
createCalendar();
createButton('Feriados');

  // Escreva seu código abaixo.
  function createCalendar(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holiday = [24, 25, 31];
    const friday = [4, 11, 18, 25];
    for(let index of dezDaysList){
      let container = document.getElementById('days');
      let newLi = document.createElement('li');
      newLi.className = 'day';
      for(let index2 of holiday){
        if(index === index2){
          newLi.classList.add('holiday');
        }
      }
      for(let index2 of friday){
        if(index === index2){
          newLi.classList.add('friday');
        }
      }
      newLi.innerText = index;
      container.appendChild(newLi);
    }
  }
  function createButton(Feriados){
    let container = document.getElementsByClassName('buttons-container');
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerText = Feriados;
    container[0].appendChild(newButton);
  }
  let buttonPress = document.getElementById('btn-holiday');
  buttonPress.addEventListener('click', colorHoliday);
  function colorHoliday(event){
    let newColor = document.getElementsByClassName('holiday');
    console.log(newColor);
    for (const key in newColor) {
      if(event.detail % 2 === 0){
        console.log(newColor[key]);
        newColor[key].style.background = "rgb(238,238,238)";
      }else {
        console.log(newColor[key]);
        newColor[key].style.background = "red";
      }
      
    }
  }
  