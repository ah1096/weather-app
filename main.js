
/////////* GENERATES HTML: why are my cards weird?????????? */////////
const main = document.getElementById('main');

/*✅ */function createElement (parent, idX, classX, tag, text, type, style, source) {
  let element = document.createElement(tag);
  console.log(element);
  element.setAttribute('id', idX);
  element.className = classX;
  element.innerText = text;
  element.setAttribute('type', type);
  element.setAttribute('style', style)
  element.setAttribute('src', source)
  parent.appendChild(element);
  console.log(element);
}

createElement(main, 'pargraphID', 'pinktext', 'p', 'hello'); 

///making the HEADER and text input/////
/*✅*/function generateHeader (){
createElement(main, 'headerDiv', 'headerDiv', 'div', null, null, null, null); 
createElement(main, null, null, 'h1', 'Weather App', null, null, null); 
createElement(main, 'ZIPinput', null, 'input', null, 'text', null, null); 
createElement(main, 'searchButton', null, 'button', 'Search', null, null, null); 
}
generateHeader();

/*🛑*/function generateCards() {
//making CITY NAME card appear//
createElement(main, null, 'card text-center', 'div', null, null, 'width: 18rem', null);
createElement(main, null, 'card-body', 'div', null, null, null, null);
createElement(main, null, 'card-title', 'h5', 'city', null, null, null);
createElement(main, 'nameDisplay', 'p', null, null, null, null, null);

//making TEMPERATURE card appear//
createElement(main, null, 'card text-center', 'div', null, null, 'width: 18rem', null);
createElement(main, null, 'card-body', 'div', null, null, null, null);
createElement(main, null, 'card-title', 'h5', 'temperature', null, null, null);
createElement(main, 'tempDisplay', 'p', null, null, null, null, null);

//making WEATHER CONDITION card appear//
createElement(main, null, 'card text-center', 'div', null, null, 'width: 18rem', null);
createElement(main, null, 'card-body', 'div', null, null, null, null);
createElement(main, null, 'card-title', 'h5', 'weather', null, null, null);
createElement(main, 'descDisplay', 'p', null, null, null, null, null);
createElement(main, null, 'card-img-bottom', 'img', null, null, null, 'images/moonbeam.png');
}


/////////GETS API DATA////////

/*✅*/function getWeather(ZIPcode) {

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

////////TEXT INPUT + BUTTON, calls ////////  
/*✅*/ window.onload = function() {
    document.getElementById("searchButton").onclick = function(){
      const ZIPcode = document.getElementById("ZIPinput").value;
      getWeather(ZIPcode);
      generateCards();
    }
  }
  
  










/* init() /* get div by ID + assign container class w/ classList, generate UI: header, text input, button; append to div */

/* createElements() /* create divs upfront */

/* tempConvert() /* retrieve standard, convert to Imperial/Metric, display all */

/* conditionToImage () /* generates image depending on weather condition */

/* getWeather () /* obtain values from the API, called by buttonclick; async */

/* clearData () /* return to init/blank page, called by buttonclick */


const weatherIcon = response.data.weather[0].icon;
const pageIcon = document.createElement('img');

let iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
pageIcon.src = iconURL;
main.appendChild(pageIcon);