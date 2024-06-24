let numeroSecreto = 0;
let intentos = 0;
let intentosMax = 10;
let numeroMax = 20;
let listaNumerosSorteados = [];

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//console.log(typeof(intentos));
function verificarIntentoUsuario() {
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(`intento ${intentos}: ${numeroUsuario}`);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento ('p',`Adivinaste el número secreto. Es el número ${numeroUsuario}. N° de intentos: ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    //Deshabilitar  Caja de Texto
    document.querySelector('#valorUsuario').setAttribute('disabled', 'true');
    //Deshabilitar  botón "Intentar"
    document.querySelector('#intentar').setAttribute('disabled', 'true');
    //habilitar el Botón "Nuevo Juego"
    document.getElementById('reiniciar').removeAttribute('disabled');
    limpiarCaja();
  } else {
      if (numeroUsuario > numeroSecreto) {
          asignarTextoElemento ('p',`El número secreto es menor que ${numeroUsuario}`);
      } else {
          asignarTextoElemento ('p',`El número secreto es mayor que ${numeroUsuario}`);
      }
      intentos++
      aumentarIntento();
      limpiarCaja();
      intentosMaximos();

    }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length === numeroMax) {
      asignarTextoElemento('p', "Ya sorteamos todos los números");
    } else {
      /*Si el número generado esta incluido en la lista*/
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
        }
      }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', "Juego del número secreto");
  asignarTextoElemento('p', `Me dices un número entre 1 y ${numeroMax} para adivinar:`);
  numeroSecreto = generarNumeroSecreto();
  reiniciarIntento();
  console.log(`Número Secreto: ${numeroSecreto}`);
  //Habilitamos la caja de texto
  document.getElementById('valorUsuario').removeAttribute('disabled');
  //Habilitamos el botón "Intentar"
  document.getElementById('intentar').removeAttribute('disabled');
}

function reiniciarJuego() {
  console.clear();
  limpiarCaja();
  condicionesIniciales();
  //Deshabilitamos el botón "Nuevo Juega mientras se este jugando"
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  //console.log(numeroSecreto)
  aumentarIntento();
  //reiniciarIntento();
}

function intentosMaximos() {
  if (intentos > intentosMax) {
    asignarTextoElemento('p', `Llegastes al número máximo de ${intentosMax} intentos`);
    //Deshabilitar Caja de Texto
    document.querySelector('#valorUsuario').setAttribute('disabled', 'true');
    //Deshabilitar botón "Intentar"
    document.querySelector('#intentar').setAttribute('disabled', 'true');
    //habilitar el Botón "Nuevo Juego"
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
}

/*function presionarEnter() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      verificarIntentoUsuario();
    }
  });
}*/

function aumentarIntento() {
  //intentos++;
  asignarTextoElemento('h2', `Intento n°: ${intentos}`);
}

function reiniciarIntento() {
  intentos = 1;
}

condicionesIniciales();
aumentarIntento();


