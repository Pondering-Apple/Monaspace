document.addEventListener("DOMContentLoaded", function () {
	typing();
	const heroInput = document.getElementById("hero-input");
	heroInput.addEventListener("input", function () {
		customType();
	});
});

let i = 0;
let txt = "MONASPACE By Github";
let speed = 50; /* The speed/duration of the effect in milliseconds */
let deleteDelay = 10000;
let typeDelay = 3000;
let fontStyles = [
	"MonaspaceArgon",
	"MonaspaceKrypton",
	"MonaspaceNeon",
	"MonaspaceRadon",
	"MonaspaceXenon",
];
let select = {
	1: argonChange,
	2: kryptonChange,
	3: xenonChange,
	4: radonChange,
	5: neonChange,
};
var slider1 = document.getElementById("axis1-slider");
var slider2 = document.getElementById("axis2-slider");
var slider3 = document.getElementById("axis3-slider");
var slider4 = document.getElementById("axis4-slider");
var output1 = document.getElementById("axis1");
var output2 = document.getElementById("axis2");
var output3 = document.getElementById("axis3");
var output4 = document.getElementById("axis4");
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;

function fontStyle() {
	let randomKey = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
	select[randomKey](); // Call the corresponding function
}

function argonChange() {
	document.body.style.fontFamily = fontStyles[0];
	document.documentElement.style.setProperty("--primary", "#89deff");
	document.documentElement.style.setProperty("--secondary", "#c4ebff");
	document.documentElement.style.setProperty("--accent", "#314246");
}
function kryptonChange() {
	document.body.style.fontFamily = fontStyles[1];
	document.documentElement.style.setProperty("--primary", "#b889ff");
	document.documentElement.style.setProperty("--secondary", "#dcc4ff");
	document.documentElement.style.setProperty("--accent", "#372f46");
}
function neonChange() {
	document.body.style.fontFamily = fontStyles[2];
	document.documentElement.style.setProperty("--primary", "#fe7e73");
	document.documentElement.style.setProperty("--secondary", "#ffb9b3");
	document.documentElement.style.setProperty("--accent", "#442d2b");
}
function radonChange() {
	document.body.style.fontFamily = fontStyles[3];
	document.documentElement.style.setProperty("--primary", "#fef073");
	document.documentElement.style.setProperty("--secondary", "#fff7af");
	document.documentElement.style.setProperty("--accent", "#44422b");
}
function xenonChange() {
	document.body.style.fontFamily = fontStyles[4];
	document.documentElement.style.setProperty("--primary", "#4cffa0");
	document.documentElement.style.setProperty("--secondary", "#8bffc1");
	document.documentElement.style.setProperty("--accent", "#244633");
}

function typing() {
	if (i < txt.length) {
		document.getElementById("hero-type").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
}

slider1.oninput = function () {
	output1.innerHTML = this.value;
};
slider2.oninput = function () {
	output2.innerHTML = this.value;
};
slider3.oninput = function () {
	output3.innerHTML = this.value;
};
slider4.oninput = function () {
	output4.innerHTML = this.value;
};

const elements = document.querySelectorAll(".scroll-fade");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
		}
	});
});

elements.forEach((el) => observer.observe(el));

// Get the sliders and the target element
const fontSizeSlider = document.getElementById("axis1-slider");
const fontWeightSlider = document.getElementById("axis2-slider");
const fontWidthSlider = document.getElementById("axis3-slider");
const fontSlantSlider = document.getElementById("axis4-slider");
const letterSet = document.querySelector(".letter-set");

// Function to update the font properties
function updateFontProperties() {
	// Update font size
	letterSet.style.fontSize = `${fontSizeSlider.value}px`;

	// Update font variation settings
	letterSet.style.fontVariationSettings = `"wght" ${fontWeightSlider.value}, "wdth" ${fontWidthSlider.value}, "slnt" ${fontSlantSlider.value}`;
}

// Initialize the font properties on page load
document.addEventListener("DOMContentLoaded", () => {
	updateFontProperties(); // Apply the current slider values to the font

	// Add event listeners to update the font properties when sliders change
	fontSizeSlider.addEventListener("input", updateFontProperties);
	fontWeightSlider.addEventListener("input", updateFontProperties);
	fontWidthSlider.addEventListener("input", updateFontProperties);
	fontSlantSlider.addEventListener("input", updateFontProperties);
});
