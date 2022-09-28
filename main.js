const APIurl = 'https://api.openweathermap.org/data/2.5/weather?zip=40324,us&appid=64a10bf79d7c527df3631aa5317b84ed&units=metric';
const APIkey = '64a10bf79d7c527df3631aa5317b84ed';


axios.get(APIurl)

.then(function (response) {
  console.log(response.data.main.temp);
})

.catch(function (error) {
  console.log(error);
})

.then(function () {
  console.log("Finished");
});

















/* init() /* get div by ID + assign container class w/ classList, generate UI: header, text input, button; append to div */

/* createElements() /* create divs upfront */

/* tempConvert() /* retrieve standard, convert to Imperial/Metric, display all */

/* conditionToImage () /* generates image depending on weather condition */

/* getWeather () /* obtain values from the API, called by buttonclick; async */

/* clearData () /* return to init/blank page, called by buttonclick */

/* buttonClick() /* get ZIP and validate input */

/* alertError() /* tells if zipcode input is invalid */ 

