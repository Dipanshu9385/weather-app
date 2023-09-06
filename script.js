// JavaScript Start
let SearchBox=document.querySelector('#input');
let SearchBtn=document.querySelector('.search button')
let weatherIcon=document.querySelector('.weather-icon')
let error=document.querySelector('.error')

async function checkWeather(cityName){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName},ind&appid=5f48f8f2ab03674412051d55b8a92ec0`
    const responce=await fetch(url)
    const data=await responce.json();

    if(responce.status==404){
        document.querySelector('.error').style.display ='block';
        document.querySelector('.weather').style.display ='none';
    }
    else{
        document.querySelector('.error').style.display ='none';
        document.querySelector('.weather').style.display ='block';

        
        console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp-273.15) + " °c";
    document.querySelector('.humidity').innerHTML=data.main.humidity +" %";
    document.querySelector('.wind').innerHTML=data.wind.speed +" km/h";
  
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='./images/clouds.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src='./images/mist.png'
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src='./images/clear.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src='./images/drizzle.png'
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src='./images/snow.png'
    }
    
    
}
}

SearchBtn.addEventListener('click',()=>{
    checkWeather(SearchBox.value);
})

