let ataqueJugador = 0
let ataquePc = 0
let resultado

function iniciarJuego(){
  elegirAtaque()
}

function elegirAtaque(){
  let botonPiedra = document.getElementById("b-piedra")
  botonPiedra.addEventListener("click", ataquePiedra)
  
  let botonPapel = document.getElementById("b-papel")
  botonPapel.addEventListener("click", ataquePapel)
  
  let botonTijera = document.getElementById("b-tijera")
  botonTijera.addEventListener("click", ataqueTijera)
}
function ataquePiedra(){
    ataqueJugador = "PIEDRA"
    ataqueAleatorioEnemigo()
}

function ataquePapel(){
    ataqueJugador = "PAPEL"
    ataqueAleatorioEnemigo()
}

function ataqueTijera(){
    ataqueJugador = "TIJERA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

  if(ataqueAleatorio == 1){
    ataquePc = "PIEDRA"
  } else if (ataqueAleatorio == 2){
    ataquePc = "PAPEL"
  } else {
    ataquePc = "TIJERA"
  }
  combate()
}

function combate(){
  for (let victorias = 0; victorias < 100; victorias++) {
    alert("Tú eliges: " + ataqueJugador)
    alert("PC elige: " + ataquePc)

      if (ataquePc == ataqueJugador) {
        alert("EMPATE")
        VidasPc--
        resultado = "EMPATE"
      }else if (ataqueJugador == "PIEDRA" && ataquePc == "TIJERA") {
        alert("GANASTE")
        VidasPc--
        resultado = "GANASTE"
      }else if (ataqueJugador == "PAPEL" && ataquePc == "PIEDRA") {
        alert("GANASTE")
        VidasPc--
        resultado = "GANASTE"
      }else if (ataqueJugador == "TIJERA" && ataquePc == "PAPEL") {
        alert("GANASTE")
        VidasPc--
        resultado = "GANASTE"
      }else {
        alert("PERDISTE")
        vidasJugador--
        resultado = "PERDISTE"
      }
  }
  crearMensaje()
}

function crearMensaje(){
  let divResultado = document.getElementById("resultado")
  let parrafo = document.createElement("p")

  parrafo.innerHTML = "El resultado es: " + resultado + "."
  divResultado.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

/**/