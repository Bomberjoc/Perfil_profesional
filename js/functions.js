// Tipos de variables

// Constantes para variables que no cambian

const pi = 3.1416;
const pul = 2.54;

// Para variables globales 
var cant_days = 10;
var name      = "Kevin Nalli";
//Let para variables de bloque o locales
let count = 5;
let i     = 0;

//Formas de Impresion o Salida en pantalla
alert(name);
console.log(cant_days);
console.log("10");
//Pantalla
document.write(name);
document.getElementById("text").innerHTML = "<h1>KevinSpinell</h1>"
document.getElementById("text-two").innerText = "<h1>KevinSpinell</h1>"

// Librerias
Swal.fire({
    icon: 'success',
    title: 'Kevin Nalli Carrascal',
    text: 'Software Developer',
    footer: '<a href="">Desea conocerme?</a>',
    showConfirmButton: false,
    timer : 5000,
    background : '#e5e5f6'
  })

// TIPOS DE DATOS

// Numericos
let number_one = 10;
let number_two = 5.5;
 // String
 let text = "Soy un texto";
// Booleans
let boolean = true;
// Array
let array_num = [1,2,3,4,5];
let array_str = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
let array_mix = [1.4,'a',true];
let array_multidimensional = [
    {name:Kevin ,last_name: Carrascal , age:16 },
    {name:Luisa ,last_name:Morantes , age:17 },
    {name:Nalli ,last_name:Mawi , age:15 },
    {name:Fernanda ,last_name:xd , age:20 }
]

// OPERADORES 
//Suma 
var suma = number_one + number_two;
//Resta
var resta = number_one - number_two;
//Multiplicacion
var mul = number_one * number_two;
//Division
var div = number_one / number_two;
div = div.toFixed(2)
//Modulo
var mod = number_one % number_two