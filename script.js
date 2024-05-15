let weather ={
  "apiKey": "169df6729182ff522c17c8e4b242a547",
  
  //Retrieve the data from the API
  fetchWeather: function(city) {
      fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
      ).then((Response) => Response.json())
       .then((data) => this.weatherDisplay(data));
  },
  //
  weatherDisplay: function(data){
      const {name} = data;
      const {icon, description} = data.weather[0];
      const {temp} = data.main;
      const {humidity} = data.main;
      const {speed} = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temperature").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"

      
        const tip = document.querySelector(".weather_Tip");
        if (data.weather[0].main === "Clear") { 
            tip.textContent = "Enjoy the sunny day! Dont forget to drink plenty of water!";
        } else if (data.weather[0].main === "Rain") {
            tip.textContent = "Don't forget to bring an umbrella!";
        } else if (data.weather[0].main === "Snow") {
            tip.textContent = "Bundle up, it's snowing!";
        } else {
            tip.textContent =  "Don't forget to bring a light jacket or sweater in case it gets chilly!";
        }
  },

  search: function (){
      this.fetchWeather(document.querySelector(".search-bar").value);
  },
};


document.querySelector(".search-button").addEventListener("click", function()
{
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event)
{
  if (event.key == "Enter"){
      weather.search();
  }
})
