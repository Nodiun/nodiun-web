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
//Google analitycs
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-76351904-1', 'auto');
ga('send', 'pageview');
