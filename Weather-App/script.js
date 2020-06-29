const btn = document.querySelector('.search')
const input = document.querySelector('.input')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const container = document.querySelector('.container')
const img = document.getElementById('pic')





btn.addEventListener('click', ()=> {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid={MY_API_KEY}`)
    .then(res => res.json())
    .then(respon => {
        console.log(respon)
        container.style.opacity = '1'
        temp.innerHTML = Math.round(respon.main.temp - 273.15) + '<span>&#8451;</span>'
        city.innerText = respon.name
        desc.innerText = respon.weather[0].description
        if(respon.weather[0].description.includes('cloud') || respon.weather[0].description.includes('clouds')) {
            console.log('yes')
            img.classList.add('fa-cloud')
        } else if(respon.weather[0].description.includes('rain')) {
            img.classList.add('fa-cloud-rain')
        } else if(respon.weather[0].description.includes('sky')) {
            img.classList.add('fa-sun')
        } else if(respon.weather[0].description.includes('haze')) {
            img.classList.add('fa-smog')
        } else {
            img.classList.add('fa-cloud')
        }

    })
    .catch(err => console.log(err))
    
})

