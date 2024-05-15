let air = {
  "apiKey": "169df6729182ff522c17c8e4b242a547",
  
  //Retrieve the data from the API
  fetchAir: function(lat, lon) {
    fetch(
      "http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey )
     .then((Response) => Response.json())
     .then((data) => this.airDisplay(data));
  },
  
  airDisplay: function(data) {
    const {co} = data.list[0].components;
    const {no} = data.list[0].components;
    const {no2} = data.list[0].components;
    const {o3} = data.list[0].components;
    const {so2} = data.list[0].components;
    const {pm2_5} = data.list[0].components;
    const {pm10} = data.list[0].components;
    const {nh3} = data.list[0].components;
    console.log(co, no, no2, o3, so2, pm2_5, pm10, nh3);
    document.querySelector(".c-value[data-comp='co']").innerText = co;
    document.querySelector(".c-value[data-comp='no']").innerText = no;
    document.querySelector(".c-value[data-comp='no2']").innerText = no2;
    document.querySelector(".c-value[data-comp='o3']").innerText = o3;
    document.querySelector(".c-value[data-comp='so2']").innerText = so2;
    document.querySelector(".c-value[data-comp='pm2_5']").innerText = pm2_5;
    document.querySelector(".c-value[data-comp='pm10']").innerText = pm10;
    document.querySelector(".c-value[data-comp='nh3']").innerText = nh3;

    let statusText = '';
    let textColor = '';
    
    if (pm2_5 < 12) {
        statusText = "Good";
        textColor = "green";
    } else if (pm2_5 >= 12 && pm2_5 < 35.5) {
        statusText = "Fair";
        textColor = "yellow";
    } else if (pm2_5 >= 35.5 && pm2_5 < 55.5) {
        statusText = "Moderate";
        textColor = "orange";
    } else if (pm2_5 >= 55.5 && pm2_5 < 150.5) {
        statusText = "Poor";
        textColor = "red";
    } else {
        statusText = "Very Poor";
        textColor = "purple";
    }
    
    const statusElement = document.querySelector(".status");
    statusElement.innerText = statusText;
    statusElement.style.color = textColor;

  },

  search: function() {
    const lat = document.querySelector(".lat-input").value;
    const lon = document.querySelector(".lon-input").value;
    this.fetchAir(lat, lon);
  },
};

document.querySelector(".search-loc").addEventListener("click", function() {
  air.search();
});

document.querySelector(".lon-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    air.search();
  }
});

document.querySelector(".lat-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    air.search();
  }
});


//Signup javascript
const passwordInput = document.querySelector('.pword');
const signupButton = document.querySelector('.SignUp');


signupButton.addEventListener('click', function(event) { 
  event.preventDefault();


  const password = passwordInput.value;
  if (password.length < 8) {
    alert("Password should be at least 8 characters long");
  } else {
    alert("success!")
  }
});
