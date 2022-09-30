


My pseudocode is garbage, therefore my code is garbage. 
Lesson learned.











VARIABLES

START: generate zipcode input/getWeather button [PAGE 1: blank]

INPUT zipcode, CLICK getWeather() button [GENERATE PAGE 2: filled page]
OUTPUT:
City name
Temp1 (direct from API) -> conversion: temp2, temp3
Condition -> 
Image




ZIP input (button) > performs getWeather function
City name
Temperature (in Farenheit/Celsius/Kelvin
Condition (sunny, foggy, etc)
Images > change depending on temp or condition

FUNCTIONS
getWeather: retrieves city name, temperature, and condition based on ZIP input
changeImage: changes image depending on temperature/condition
generateContent: dynamically generates blank page layout OR buttons?


Generate search input HOW?


Type in ZIP code
Click submit button
Retrieve values from the API HOW?
Display values HOW?
Click clear button
Return to initial page HOW?









/* init() /* get div by ID + assign container class w/ classList, generate UI: header, text input, button; append to div */

/* createElements() /* create divs upfront */

/* tempConvert() /* retrieve standard, convert to Imperial/Metric, display all */

/* conditionToImage () /* generates image depending on weather condition */

/* getWeather () /* obtain values from the API, called by buttonclick; async */

/* clearData () /* return to init/blank page, called by buttonclick */
