$(document).ready(function() {
	$("#hamburger_menu").css({
		top: $("#overlay").height()
	});
});


function toggle() {
	var hamburgerIcon = document.getElementById("menu-trigger");
	if (hamburgerIcon.className === "mobile-trigger menu-trigger menu-trigger-not-active") {
		hamburgerIcon.className = "mobile-trigger menu-trigger menu-trigger-active";
	} else {
		hamburgerIcon.className = "mobile-trigger menu-trigger menu-trigger-not-active";
	}

	var hamburgerMenu = document.getElementById("hamburger_menu");
	if (hamburgerMenu.className === "hidden") {
		hamburgerMenu.className = "shown";
	} else {
		hamburgerMenu.className = "hidden";
	}
}
