var x = 0; 
var i = 0;
var j = document.getElementsByClassName("menu_text");

function toggle() {
	if(x == 1) {
		document.getElementById("hamburger_menu").style.width = "0";
		document.getElementById("hamburger_menu").style.paddingLeft = "0";
		document.getElementById("hamburger_menu").style.paddingRight = "0";
		for(i = 0; i < j.length; ++i) {
			j[i].style.fontSize = "0";
		}
		x = 0;
	} else {
		document.getElementById("hamburger_menu").style.width = "12.5%";
		document.getElementById("hamburger_menu").style.paddingRight = "1%";
		document.getElementById("hamburger_menu").style.paddingLeft = "1%";
		for(i = 0; i < j.length; ++i) {
			j[i].style.fontSize = "1.3em";
		}
		x = 1;
	}
}