var dibujo = document.getElementById('area_de_dibujo');
var lienzo = dibujo.getContext("2d");
var colorcito = document.getElementById("color_lapiz");
var color_background = document.getElementById("color_fondo");
var grosor = document.getElementById("grosor_lapiz");
var botoncito_grosor = document.getElementById("boton_grosor");
var estado;
var x;
var y;
dibujo.addEventListener("mousedown", pulsarMouse);
dibujo.addEventListener("mousemove", moverMouse);
dibujo.addEventListener("mouseup", levantarMouse);

botoncito_grosor.addEventListener("click",cambiarGrosor);
color_background.addEventListener("click", cambiarFondo);
function cambiarFondo() {
  lienzo.fillStyle = color_background.value;
  lienzo.fillRect( 0, 0, dibujo.width, dibujo.height);
}
function cambiarGrosor() {
  parseInt(grosor);
}

function pulsarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento)
{
    if(estado == 1)
    {
      dibujarLinea(color_lapiz.value, x, y, evento.layerX, evento.layerY);
    }
    else
    {
      x = evento.layerX;
      y = evento.layerY;
    }
}

function levantarMouse(evento)
{
  estado = 0;
}

function dibujarLinea(colorL, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorL;
  lienzo.lineWidth = grosor.value;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
