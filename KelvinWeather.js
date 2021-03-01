//forcast for today in Kelvin.
const kelvin = 293;
//convert to celsius
const celsius = kelvin - 273;

// Convert to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

//round down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//convert to newton
var newton = celsius * (33/100);
//round down
newton = Math.floor(newton);
console.log(`The temperture is ${newton} degrees newton`);