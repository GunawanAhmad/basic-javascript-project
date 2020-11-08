let hour = document.querySelector('.hand.hour')
let minute = document.querySelector('.hand.minute')
let second = document.querySelector('.hand.second')



// console.log(second)



setInterval(setClock,1000)

function setClock() {
    let currentDate = new Date();
    console.log(currentDate)
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (currentDate.getMinutes() + secondRatio) / 60;
    let hourRatio = (currentDate.getHours() + minuteRatio) / 12;
    setRotation(hour, hourRatio);
    setRotation(minute, minuteRatio);
    setRotation(second, secondRatio);
}

function setRotation(element, rotationRatio) {
    element.style.transform = `rotate(${rotationRatio * 360 + 180}deg)`
}
