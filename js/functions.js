// Tipos de variables

// Constantes para variables que no cambian

const pi = 3.1416;
const pul = 2.54;

// Para variables globales 
var cant_days = 10;
var name      = "José Torres";
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
let array_num = [1,2,3,4,5,6,7];
let array_str = ['Lunes','Martes','Miercoles','Jueves','Viernes',"Sabado","Domingo"];
let array_mix = [1.4,'a',true];
// let array_multidimensional = [
//     {name:Kevin ,last_name: Carrascal , age:16 },
//     {name:Luisa ,last_name:Morantes , age:17 },
//     {name:Nalli ,last_name:Mawi , age:15 },
//     {name:Fernanda ,last_name:xd , age:20 }
// ]

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
var mod = number_one % number_two;

// OPERADORES LÓGICOS Y ESTRUCTURAS CONDICIONALES 
// AND && con if
var bool = true;
var numeric = 5;
if(!bool && numeric === 5){
  console.log("ingresa if: " + bool);
}
else{
  console.log("ingresa else: " + bool);
}

// OR || con if
var age = 31;
if(age == 31 || numeric == "5"){
  console.log("ingresa if: " + bool);
  age++;
}
else{
  console.log("ingresa else: " + bool);
  age--;
}
console.log(age);

// FOR
console.log(array_text.length)
for(let i=0; i<array_text.length; i++){
  console.log(array_str[i]+ " " + (i+1));
}

// WHILE
let j=0;
while(j<array_text.length){
  console.log(array_str[j]+ " " + (j+1));
  j++;
}

// DO WHILE
var w=0;

do{
  console.log(array_str[w]+ " " + (w+1))
  w++
}while(w<array_str.length)

// CREAR FUNCIONES
function load_page(){
  alert("BIENVENIRDO A MI SITIO WEB")
}

function change_color(){
  document.body.style.backgroundColor = "red";
  document.body.style.color = "#fff";
}

const btn_clear = document.querySelector("#limpiar")
btn_clear.addEventListener("click", () =>{
  document.body.style.backgroundColor = "red";
  document.body.style.color = "white";
});

// FORMULARIO DE REGISTRO
const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const validation = document.getElementById("validation");

form_register.addEventListener("submit", event_name => {
  event_name.preventDefault();
  let info = "";
  if(nombres.value.length <= 2 || apellidos.value.length <= 2){
    info += "Nombres y/o apellidos deben ser mayores a 2 letras"
    validation.style.color="red";
  }
  else{
    alert(nombres + " " + apellidos);
    nombres.style.backgroundColor = "green"
    apellidos.style.backgroundColor = "green"
  }
  validation.innertText = info;
})