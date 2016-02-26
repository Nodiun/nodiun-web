var button = document.getElementById('button-menu');
var header = document.getElementById('header')
var nav = document.getElementById('nav');
var items = document.getElementsByClassName('header-nav-item');

var toggleMenu = function() {
   nav.classList.toggle('header-nav--show');
	header.classList.toggle('header--show');
}

button.addEventListener("click", toggleMenu);

for (var i = items.length - 1; i >= 0; i--) {
   items[i].addEventListener("click", toggleMenu);
}
