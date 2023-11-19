
const temperature=document.getElementById("temperature");
const citys = document.getElementById("city");
const weathericon= document.getElementById("weather-icon");
const locat = document.getElementById("location");
const cloud= document.getElementById("cloud");
const Humidity= document.getElementById("Humudity");
const wind= document.getElementById("Wind");
const btn1 = document.getElementById("btn");
const err = document.querySelector('.error');

btn1.addEventListener("click",()=>{
    weatherUpdate(locat.value);
});
async function weatherUpdate(city){
    let URL='http://api.weatherapi.com/v1/current.json?key=%204fb88579ae254b62880151309231511&q='+city;
    const response =await fetch(URL);
    if (response.status==400){
        err.style.display="block";
    }else{
    var data = await response.json();

    temperature.textContent = data.current.temp_c+'°C';
    citys.textContent = data.location.name;
    cloud.textContent = data.current.condition.text;
    Humidity.textContent= data.current.humidity+'%';
    wind.textContent = data.current.wind_kph+'  Kmh';
    err.style.display="none";

}
citys.classList.add("termanimation");
temperature.classList.add("cityanimationBB");


}


