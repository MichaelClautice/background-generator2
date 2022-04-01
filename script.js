// •••••••••••••••••
// DOM SELECTORS
// for 4 elements we need
// h3 to display the linear-gradient values of the current background colors:
var css = document.querySelector("h3");
// color picker 1
var color1 = document.querySelector(".color1");
// color picker 2
var color2 = document.querySelector(".color2");
// the <body> which will display the current color gradient
var body = document.getElementById("gradient");
// •••••••••••••••••

// •••••••••••••••••
// 2 CON.LOG TESTS
// test 
// console.log(body);
// test
// body.style.background = "red";
// •••••••••••••••••

// •••••••••••••••••
// THE SET GRADIENT FUNCTION
// used for gradient colors 1 + 2
function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	// add CSS text content to the <h3> DOM
	css.textContent = body.style.background + ";";
}
// •••••••••••••••••

// •••••••••••••••••
// color picker 1's eventListener
// 'input' is th event
color1.addEventListener("input", setGradient);

// color picker 2's eventListener
// 'input' is th event
color2.addEventListener("input", setGradient);
// •••••••••••••••••




