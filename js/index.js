const btnSubmit = document.getElementById("submit");
const elemcityname = document.getElementById("cityName");
const warningAlert = document.getElementById('warningAlert');
const mainElem = document.querySelector('.main');
const token  = "&appid=0bd5d2047c05c02794b83b1d2719fae2";
const url = `https://api.openweathermap.org/data/2.5/weather?q=`;




elemcityname.addEventListener('keypress', function(e) {
    warningAlert.classList.add('fade')
})
btnSubmit.addEventListener('click', function(event) {
    event.preventDefault()
    
    if(elemcityname.value !== '') {
        fetch(url + elemcityname.value + token)
            .then(response => response.json())
            .then(data => {
                const day = new Date().getDay();
                const temp = Math.round(Number(data['main']['temp']) - 273.15);
                const weatherCard ="<div class='card-body itemcard'><h3 class='card-title'>Город:" + data['name'] + "</h3><h4 class='card-subtitle mb-2 text-muted'>" + getDay(day)+ "</h4> <div class='card-text'><span class='bold'>Температура</span>: " + temp + "С&#176.</div><div class='card-text'><span class='bold'><span class='bold'>Влажность:</span> " + data['main']['humidity'] + "%</div><span class='bold'>Скорость Ветра:</span> " + data['wind']['speed'] + "m/s</div></div>";
                mainElem.insertAdjacentHTML('afterbegin', weatherCard)

              
              
              console.log(data)
            })
            .catch(error => console.log(error))
    } else {
        warningAlert.classList.remove('fade')
    }

})



function getDay(day) {
    const days = {
        "1": 'Понедельник',
        "2": 'Вторник',
        "3": 'Среда',
        "4": 'Четверг',
        "5": 'Пятница',
        "6": "Суббота",
        "7": "Воскресенье"
    }

    return days[day.toString()]
} 