var button = document.getElementById('button-menu');
var header = document.getElementById('header')
var nav = document.getElementById('nav');

var frases = ["¿Quieres comunicar?","¿Necesitas algo con que traer clientes?", "¿Quieres jugar?"];

var toggleMenu = function() {
   nav.classList.toggle('header-nav--show');
	header.classList.toggle('header--show');
}


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

maquina("sponsor",frases[1],100);

button.addEventListener("click", toggleMenu);