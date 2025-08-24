let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 4;

// Lista para almacenar los valores ya jugados
let listaNumerosSorteados = [];



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);    

    console.log(intentos);
    
    //Nos muestra en la consola si acerto con el Número de Usuario con el de número secreto
    if(numeroUsuario === numeroSecreto)
        {
            asignarTextoElemento('p', `¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(numeroUsuario > numeroSecreto)
                {
                    asignarTextoElemento('p', 'El número secreto es menor');
                } else {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
                intentos++;
                limpiarCaja();
            }
            return;
        }




function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}



function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya sorteamos todos los números, mostrar un mensaje de que ya jugo todos los número
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {
        // Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



function condicionesIniciales(){
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    asignarTextoElemento('h1', 'Juego de número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    //Limpiar caja de input
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();

    //Desahabilitar el botón de "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
        
        
condicionesIniciales();

