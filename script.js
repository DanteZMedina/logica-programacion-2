console.log('Prueba');

/*
    Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
    Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
    Debe imprimir ambos resultados por consola o por el DOM.
    Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.

    Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:

    Entrada: 
        45.
    Salida
        Grados Kelvin: 318.15
        Grados Fahrenheit: 113. 
    Entrada:
         14.
    Salida
        Grados Kelvin: 287.15
        Grados Fahrenheit: 57.2. 

*/
console.log('Bienvenido al programa de conversión de temperaturas. Sientete libre de ingresar la temperatura en grados Celsius y te dire su equivalente en Fahrenheit y en Kelvin.');
/*
let celsius;
let fahrenheit;
let kelvin;
do {
    celsius = prompt('Ingresa la temperatura en grados celsius en número: ');

} while (isNaN(celsius) || celsius.trim() === '');

// fahrenheit
fahrenheit = (celsius * 1.8) + 32;

// Kelvin
kelvin = parseInt(celsius) + 273.15;

console.log(celsius);
console.log(fahrenheit);
console.log(kelvin);
*/

function userInteraction() { 
    let celsius;
    do {
    celsius = prompt('Ingresa la temperatura en grados celsius en número: ');
    parseInt(celsius)

} while (isNaN(celsius) || celsius.trim() === '');
return celsius;
}

function fahrenheitConversion(celsius) { 
    let fahrenheit;
    fahrenheit = (parseInt(celsius) * 1.8) + 32;
    return fahrenheit;
}

function kelvinConversion(celsius) { 
    let kelvin;
    return kelvin = parseInt(celsius) + 273.15; 
    
}

let celsius = userInteraction();
let fahrenheit = fahrenheitConversion(celsius);
let kelvin = kelvinConversion(celsius);

console.log(celsius + "°C son " + fahrenheit + "°F");
console.log(celsius + "°C son " + kelvin + "°git statuK");





