const btn = document.querySelector(".search_btn");
const inputBox = document.querySelector(".input_box");

async function checkWeather(city){
  const apiKey = "bb9ff27621f49495b3493359f197bbd3";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

  try{
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
  
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector("#wind_speed").innerHTML=data.wind.speed + "Km/h";
    document.querySelector("#humidity_percent").innerHTML=data.main.humidity + "%";
    document.querySelector(".city").innerHTML=data.name;
  }catch(e){
    alert('Please enter valid city name');
  }

}

btn.addEventListener("click",()=>{

  checkWeather(inputBox.value);
  inputBox.value='';

});