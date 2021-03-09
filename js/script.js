// OPEN MOBILE MENU

function toggleMobileNavigation() {
	var element = document.getElementById("mobile-navigation");

	if (element.classList.contains("mobile__open")) {
		element.classList.remove("mobile__open");
	} else {
		element.classList.add("mobile__open");
	}
}
