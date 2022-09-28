
/*✅ FUNCTION: getWeather (populates elements w/ API data) *//////
function getWeather(ZIPcode) {

const APIurl = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIPcode},us&appid=64a10bf79d7c527df3631aa5317b84ed&units=imperial`;
/* ?????????????????create function to change the units to metric/standard, maybe add toggle button? 
/* ?????????????????use template literals on units in url *////

axios.get(APIurl)

.then(function (response) {
  console.log(response);

  document.getElementById("nameDisplay").innerText = `${response.data.name}`;
  nameDisplay.style.color = "black";
  console.log(response.data.name);

  document.getElementById("tempDisplay").innerText = `${response.data.main.temp}°F`;
  console.log(response.data.main.temp);
  
  document.getElementById("descDisplay").innerText = `${response.data.weather[0].description}`;
  console.log(response.data.weather[0].description);

})

.catch(function (error) {
  document.getElementById("nameDisplay").innerText = "Oops. Please input a valid ZIP code.";
  nameDisplay.style.color = "red";
  console.log(error);
})

.then(function () {
  console.log("Finished");
});
}

/* ✅ FUNCTION: onclick (receives input from text field to activate getWeather on button click) *//////
window.onload = function() {
  document.getElementById("searchButton").onclick = function(){
    const ZIPcode = document.getElementById("ZIPinput").value;
    getWeather(ZIPcode);
  }
}















/* init() /* get div by ID + assign container class w/ classList, generate UI: header, text input, button; append to div */

/* createElements() /* create divs upfront */

/* tempConvert() /* retrieve standard, convert to Imperial/Metric, display all */

/* conditionToImage () /* generates image depending on weather condition */

/* getWeather () /* obtain values from the API, called by buttonclick; async */

/* clearData () /* return to init/blank page, called by buttonclick */

/* buttonClick() /* get ZIP and validate input */

/* alertError() /* tells if zipcode input is invalid */ 

