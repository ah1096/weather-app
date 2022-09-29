
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










/* init() /* get div by ID + assign container class w/ classList, generate UI: header, text input, button; append to div */

/* createElements() /* create divs upfront */

/* tempConvert() /* retrieve standard, convert to Imperial/Metric, display all */

/* conditionToImage () /* generates image depending on weather condition */

/* getWeather () /* obtain values from the API, called by buttonclick; async */

/* clearData () /* return to init/blank page, called by buttonclick */

/* buttonClick() /* get ZIP and validate input */

/* alertError() /* tells if zipcode input is invalid */ 

