//botones comunes
let boton_home = document.getElementById("buttom-home")
let boton_champs = document.getElementById("buttom-champs")
let boton_regiones = document.getElementById("buttom-regiones")
let boton_champs_2 = document.getElementById("buttom-champs-2")
let boton_regiones_2 = document.getElementById("buttom-regiones-2")
let boton_asesinos = document.getElementById("asesinos")
let boton_magos = document.getElementById("magos")
let boton_luchadores = document.getElementById("luchadores")
let boton_tiradores = document.getElementById("tiradores")
let boton_soportes = document.getElementById("soportes")
let boton_tanques = document.getElementById("tanques")
let boton_arcane = document.getElementById("element-one")
let boton_sg = document.getElementById("element-two")
let boton_kda = document.getElementById("element-three")
let boton_coven = document.getElementById("element-four")

 //secciones comunes
let section_home = document.getElementById("section-home")
let section_champs = document.getElementById("section-champs")
let section_regiones = document.getElementById("section-regiones")
let section_asesinos = document.getElementById("section-asesinos")
let section_magos = document.getElementById("section-magos")
let section_luchadores = document.getElementById("section-luchadores")
let section_tiradores = document.getElementById("section-tiradores")
let section_soportes = document.getElementById("section-soportes")
let section_tanques = document.getElementById("section-tanques")
let section_champ_page = document.getElementById("section-page")
let section_arcane = document.getElementById("section-arcane")
let section_sg = document.getElementById("section-sg")
let section_kda = document.getElementById("section-kda")
let section_coven = document.getElementById("section-coven")


//listeners
boton_home.addEventListener("click", enviarHome)
boton_champs.addEventListener("click", enviarChamps)
boton_regiones.addEventListener("click", enviarRegiones)
boton_champs_2.addEventListener("click", enviarChamps)
boton_regiones_2.addEventListener("click", enviarRegiones)
boton_asesinos.addEventListener("click", enviarAsesinos)
boton_magos.addEventListener("click", enviarMagos)
boton_luchadores.addEventListener("click", enviarLuchadores)
boton_tiradores.addEventListener("click", enviarTiradores)
boton_soportes.addEventListener("click", enviarSoportes)
boton_tanques.addEventListener("click", enviarTanques)
boton_arcane.addEventListener("click", enviarArcane)
boton_sg.addEventListener("click", enviarSg)
boton_kda.addEventListener("click", enviarKda)
boton_coven.addEventListener("click", enviarCoven)


//funciones
function enviarHome(){
    section_home.style.display = "flex"
    section_champs.style.display = "none"
    section_regiones.style.display = "none"
    section_asesinos.style.display = "none"
    section_magos.style.display = "none"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "none"
    section_soportes.style.display = "none"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarChamps(){
    section_champs.style.display = "flex"
    section_home.style.display = "none"
    section_regiones.style.display = "none"
    section_asesinos.style.display = "none"
    section_magos.style.display = "none"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "none"
    section_soportes.style.display = "none"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarRegiones(){
    section_regiones.style.display = "flex"
    section_home.style.display = "none"
    section_champs.style.display = "none"
    section_asesinos.style.display = "none"
    section_magos.style.display = "none"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "none"
    section_soportes.style.display = "none"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarAsesinos(){
    section_asesinos.style.display = "flex"
    section_magos.style.display = "none"
    section_champs.style.display = "none"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "none"
    section_soportes.style.display = "none"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarMagos(){
    section_asesinos.style.display = "none"
    section_champs.style.display = "none"
    section_magos.style.display = "flex"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "none"
    section_tanques.style.display = "none"
    section_soportes.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarLuchadores(){
    section_asesinos.style.display = "none"
    section_champs.style.display = "none"
    section_magos.style.display = "none"
    section_luchadores.style.display = "flex"
    section_tiradores.style.display = "none"
    section_soportes.style.display = "none"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarTiradores(){
    section_asesinos.style.display = "none"
    section_champs.style.display = "none"
    section_magos.style.display = "none"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "flex"
    section_soportes.style.display = "none"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarSoportes(){
    section_asesinos.style.display = "none"
    section_champs.style.display = "none"
    section_magos.style.display = "none"
    section_luchadores.style.display = "none"
    section_tiradores.style.display = "none"
    section_soportes.style.display = "flex"
    section_tanques.style.display = "none"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
function enviarTanques(){
    section_asesinos.style.display = "none" 
    section_champs.style.display = "none"  
    section_magos.style.display = "none"
    section_luchadores.style.display = "none" 
    section_tiradores.style.display = "none"
    section_soportes.style.display = "none"
    section_tanques.style.display = "flex"
    section_arcane.style.display = "none"
    section_sg.style.display = "none"
    section_kda.style.display = "none"
    section_coven.style.display = "none"
}
window.addEventListener("load", enviarHome)