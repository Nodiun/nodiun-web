var button = document.getElementById('button-menu');
var nav = document.getElementById('nav');

var toggleMenu = function() {
	nav.classList.toggle('header-nav--show');
}

var closeMenu = function() {
	nav.classList.remove('header-nav--show');
}
button.addEventListener("click", toggleMenu);