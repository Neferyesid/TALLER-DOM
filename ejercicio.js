/*  creamos un arrays  para las notas del estudiante*/
/* let notasArray=[]
let promedio */
/* funcion */
/* const notasActuales = (notas) => 
{
    while(notas <0 || notas >5){
        notas = +prompt("ingrese otra vez la nota");
    }
    notasArray.push(notas)
}  */
/* 
for (let i = 0; i < 4; i++) { */
    /* formas de concatenar */
    /* let notas = prompt("ingrese la nota"+ i+1) */
/*     let notas = +prompt(`ingre su nota ${i+1}`)
    notasActuales(notas)  
} */

/* console.log(notasArray)

const sumaDeNotas= (array) =>
{
    promedio= array.reduce((a,b) => a+b)/array.length

} */
/* metodos de el arrays */
/* push:agrega datos al final del array */
/* pop:elimina el ultimo dato del array */
/* unshift:agrega al array */
/* shift:agrga elemntos al array */
/* sort:ordena el array */
/* reverse: voltear el array */

function sumar()
/* queryselector es un selector Css y trae el primero elemento que tenga relacion con eso */
{
    let valorUno=+(document.querySelector('#valorUno').value) 
    let valorDos= parseInt(document.getElementById('valorDos').value)
    document.getElementById('resultado').innerHTML=valorUno+valorDos
}
function restar()
{
    let valorUno= parseInt(document.getElementById('valorUno').value) 
    let valorDos= parseInt(document.getElementById('valorDos').value)
    document.getElementById('resultado').innerHTML=valorUno-valorDos   
}
function multiplicar()
{
    let valorUno= parseInt(document.getElementById('valorUno').value) 
    let valorDos= parseInt(document.getElementById('valorDos').value)
    document.getElementById('resultado').innerHTML=valorUno*valorDos
}
function dividir()
{
    let valorUno= parseInt(document.getElementById('valorUno').value) 
    let valorDos= parseInt(document.getElementById('valorDos').value)
    document.getElementById('resultado').innerHTML=(valorUno/valorDos).toFixed(3)
}
/* let valorUno=+(document.getElementById('valorUno').value) 
let valorDos=+(document.getElementById('valorDos').value)
let resultado=document.getElementById('resultado')
function sumar()
{
    resultado.innerHTML= valorUno+valorDos
} */
/* //////////////////////////////////////////////////////////////////////////////////////// */
/* ejercicio clase */
/* ejemplo 1: creando lista HTML con un arra */
const opciones= ['Modulo 1','Modulo 2','Modulo 3', 'Moldulo 4']

function generarListaOrdenada(vec)
{
    let s= ''
    function comienzo()
    {
        s= '<ol>'
    }
    function fin()
    {
        s=  s +'<ol>'
    }
    /* ejecutar funcion comienzo */
    comienzo()
    /* llenar la lista <ol> */
   for (let f = 0; f < vec.length; f++) 
   {
        s = s +'<li>' + vec[f] +'</li>'
    
   }
   /* ejecutar la funcion fin */
   fin()
   return s;

}

document.getElementById('div1').innerHTML= generarListaOrdenada(opciones)
/* ejemplo 2: creando div con un array  */
const numPrueba =[2,4,6,8,10,12]
function prueba(arrayLista) 
{
    let v=''
    for (let index = 0; index < arrayLista.length; index++) 
    {
       v += '<div>' + arrayLista[index] +'</div>'      
    }
    return v
}
document.getElementById('array1').innerHTML= prueba(numPrueba)
/* opcion 2 */
/* const mtdMostrar = () => 
{
    numPrueba.forEach((valor, i)=>
    {
        alert("numero" +i+"["+valor+"]")
    })
}
mtdMostrar();
 */
/* opcion 3 */
/* function mostrarDom(elemento, arr) 
{
    for (let index = 0; index < arr.length; index++) 
    {
        document.getElementById(elemento).innerHTML+= '<div>' ${arr[index]} '</div>'
        
    }  
    /* opcion 4 */ 
  /*   arr.array.forEach(valor => 
    {
        document.getElementById(elemento).innerHTML+='<div>'
        
    }); 
}  */
/* ///////////////////////////////////////////////////// */
/* componentes de formulario */
/* una funcion para capturar dos datos de caja de texto */
function calcular() 
{
    let numUno = document.getElementById("n1").value
    numDos = document.getElementById("n2").value 
    if (numUno>0 && numDos>0) 
    {
        let resul = parent(numUno) + parent(numDos)
    
    }else
    {
        alert

    }
    
     document.getElementById("formRes").value = resul
}


/* ejercicio 2 */
window.onload = function() 
{
    document.querySelector("#sumar").onclick = sumar
    document.querySelector("#restar").onclick = restar
    document.querySelector("#multiplicar").onclick = multiplicar
    document.querySelector("#dividir").onclick = dividir
}
let resul;
function sumar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) + parseInt(numDos);
}
function restar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) - parseInt(numDos);
}
function multiplicar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) * parseInt(numDos);
}
function dividir() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) / parseInt(numDos);
}
function calcularBoton()
{
    document.querySelector("#resul").value=resul
}
/* //////////////////////////////////////////////// */
/* ejercicio 3 */
let num;
function cuentaRegre() 
{
    document.getElementById("tiempo").value = num
    num--
    if (num> 0) 
    {
       setTimeout(cuentaRegre, 1000)
    }
}


function datos() 
{
    num =+ document.getElementById("num").value
    cuentaRegre()
}
/* ////////////////////////////////////////////////// */
/* ejecicio 7 */
let color= document.getElementById('select1')
function cambiarColor() 
{
    document.getElementById('text1').value = color.selectedIndex
    document.getElementById('text2').value = color.options[color.selectedIndex].text
    document.getElementById('text3').value = color.options[color.selectedIndex].value
    let valuecolor = color.options[color.selectedIndex].value
    document.getElementById('valuecolor').value = ("#"+valuecolor)  
    
}
color.addEventListener('change', cambiarColor )
/* ///////////////////////////////////// */
/* ejercicio 5 textarea */
const controlarCaracteres = () =>
{
    let tamTextarea = document.getElementById('description')
    if (tamTextarea.value.length == 0) {
        alert('campo de texto vacío')
        
    }else if (tamTextarea.value.length > 50) {
        alert(' Texto debe ser de 50max')
        
    }else{
        alert(' Tamaño de texto correcto')

    }
}
let boton= document.getElementById('btnTextArea')
boton.addEventListener("click", controlarCaracteres)
/* ///////////////////////////////////////////////// */
/* ejercicio 6 */


function alertaCheck(checkItem){
    if(checkItem.checked){
        document.getElementById("txtImpresion").innerHTML = "Check Seleccionado!";
    }else{
        document.getElementById("txtImpresion").innerHTML = "Check No Seleccionado!";
    }
}

// ejemplo 2 - contar los check seleccionados
 function contarSeleccionados(){
    let cant = 0
    for(let i = 1; i < 6; i++){
        if(document.getElementById("chk"+i).checked){
            cant++
        }
    }
    alert(`Conoce ${cant} Lenguajes`)
 }

 let btn2 = document.getElementById("btnChk");
 btn2.addEventListener('click', contarSeleccionados);

















 
 const fnControlaCaracteres = () =>{
     let tamTxtarea = document.getElementById('description');
     if(tamTxtarea.value.length == 0){
         alert('Campo de texto vacío');
     }else if(tamTxtarea.value.length > 50){
         alert('Texto debe ser de 50max');
     }else{
         alert('Tamaño de texto correcto')
 
     }
 }
 
 let btn3 = document.getElementById('btnTextArea');
 btn3.addEventListener('click',fnControlaCaracteres);


//ejercicio imagene

 function muestra(num) {
    let imagen = document.images[num].src
    let grande = document.images["pantalla"]
    grande.src  = imagen
}





// Ejercicio 10 Expresiones regulares - validación tipo caracteres
let patronLetra = /^[a-zA-Z]/;
let patronVocal = /[aeiouAEIOUáéíóú]/;
let texto1 = '--> Texto contiene Letra y contiene una vocal';
let texto2 = '--> Texto NO contiene Letra o NO contiene una vocal';

function validarLetras(){   
let palabra = document.getElementById('txtCar').value;
    if(patronLetra.test(palabra) && patronVocal.test(palabra)){
        // alert('--> Texto contiene Letra y contiene una vocal');
        document.getElementById("rtaRegular").innerHTML=texto1;
    }else{
        // alert('--> Texto NO contiene Letra o NO contiene una vocal');
        document.getElementById("rtaRegular").innerHTML=texto2;
    }
}

let btn4 = document.getElementById('btnRegular');
btn4.addEventListener('click', validarLetras);

// Ejemplo 2 - Letra+Vocal+número+longitud
// let patronLetras = /[a-zA-Z][aeiouAEIOUáéíóú]/;
// validación sólo tipo alfanumericos:
let patronLetras= /^[a-zA-Z0-9]*$/;
let patronNumeros = /[0-9]{1}/;
let texto3 = '--> Correcto!';
let texto4 = '--> Texto debe contener 6 caracteres: Letras/Vocales/Números';

function validarCajaTexto(){   
let entradaReg = document.getElementById('txtReg').value;
    if(patronLetras.test(entradaReg) && patronNumeros.test(entradaReg) && entradaReg.length>5){
        // alert('--> Texto contiene Letra y contiene una vocal');
        document.getElementById("rtaRegular2").innerHTML=texto3;
    }else{
        // alert('--> Texto NO contiene Letra o NO contiene una vocal');
        document.getElementById("rtaRegular2").innerHTML=texto4;
    }
}

let btn5 = document.getElementById('btnRegular2');
btn5.addEventListener('click', validarCajaTexto);

// Ejemplo 3 - número telefonico 607-6303030
// let patronTel = /^[607]{3}\d{7}$/;
let patronTel = /^607\d{7}$/;
let texto5 = '--> Número debe iniciar 607 y contener 10 digitos';

function validarTelefono(){   
let entradaTel = document.getElementById('txtNumber').value;
    if(patronTel.test(entradaTel)){
        document.getElementById("rtaRegular3").innerHTML=texto3;
    }else{
        document.getElementById("rtaRegular3").innerHTML=texto5;
    }
}

let btn6 = document.getElementById('btnRegular3');
btn6.addEventListener('click', validarTelefono);
// validación para entrada de números decimales: /^[0-9]+\.?[0-9]*$/
// comprobar si una cadena es un número escribiremos: /^\d$/


let teclaPres = document.getElementById("text");
let resultado = document.getElementById("rtaTeclado");

teclaPres.addEventListener("keypress", function(){
    alert("Tecleado");
 })

// Ejemplo 2: 
teclaPres.addEventListener("keypress", function(evento){
     document.getElementById("rtaTeclado").innerHTML=evento.keyCode;
 })


// Ejemplo 3:
window.addEventListener("keypress", function(evento){
    if(evento.keyCode == 13){
        resultado.innerHTML = teclaPres.value
    }
})

// Ejemplo 4: mostrar caracteres del (keyUp)
const fnCaracteres = ()=>{
    let cantidadCar = document.getElementById("tamText").value.length;
    let disponibles = 50 -parseInt(cantidadCar);
    document.getElementById("cantidad").innerHTML = disponibles;
}

document.getElementById("tamText").addEventListener("keyup",fnCaracteres);


//ejecicio 14

let listaElementos = document.querySelector("#elementos");

//mostrar un elemento de la lista en particular
console.log(listaElementos.children[2]);
 listaElementos.children[2].style.backgroundColor = "green";

//--Enviar el evento submit
let form = document.querySelector("#frmLista");
form.addEventListener("submit", fnAgregarElemento);
//--Enviar Eliminar evento
listaElementos.addEventListener("click", fnEliminarElemento);

// Listado de funciones
function fnAgregarElemento(evento){
    evento.preventDefault();
    // capturar el valor de la caja de texto
    let newElement = document.getElementById("txtElemento").value;
//    
    // crear un nuevo elemento de lista li
    let li = document.createElement("li");
    // crear un nuevo elemento de botón
    let btnDelete = document.createElement("button");
//    
    // agregar elementos a las clases
    li.className = "list-group-item";
    btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    // agregar el nodo de textoNode    
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    listaElementos.appendChild(li);
    li.appendChild(btnDelete);
}

function fnEliminarElemento(evento){
    // comprobar los elementos de la clase 'delete'
    if(evento.target.classList.contains("delete")){
        // mostrar en pantalla mensaje de confirmación
        if(confirm("¿Seguro de eliminar Elemento?")){
            let li = evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }

}