//document es un puente entre js y html, el cual me permite trabajar con metodos como el querySelector()
//querySelector() - es un selector generico, en este caso traer el elemento a la variable elementoHTML(objeto)
//ctrl+f - buscarElemento
let numSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroUsuario == numSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //activar boton nuevo juego
        document.getElementById('intento').setAttribute('disabled',true);
    }else{
        //el ususario no acerto.
        if(numeroUsuario > numSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }return;
}

function generarNumSecreto(){
    let numGenerado = Math.floor(Math.random()*numMaximo)+1;
    console.log(numGenerado);
    console.log(listaNumSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumSorteados.length == numMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        //document.getElementById('intento').setAttribute('disabled', true);
        //return null; // no hay más números disponibles
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumSorteados.includes(numGenerado)){
            return generarNumSecreto(); //recursividad
        }else{
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //vacio
}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numMaximo}`);
    numSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('intento').removeAttribute('disabled');
}

condicionesIniciales();










