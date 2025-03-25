document.addEventListener("DOMContentLoaded", function () {
	updateFontProperties();
	fontSizeSlider.addEventListener("input", updateFontProperties);
	fontWeightSlider.addEventListener("input", updateFontProperties);
	fontWidthSlider.addEventListener("input", updateFontProperties);
	fontSlantSlider.addEventListener("input", updateFontProperties);
	document.getElementById("custom-input").addEventListener("input", customType);
});

// Array of font styles used for different themes
let fontStyles = [
	"MonaspaceArgon",
	"MonaspaceKrypton",
	"MonaspaceNeon",
	"MonaspaceRadon",
	"MonaspaceXenon",
];

// Object mapping numeric keys to theme change functions
let select = {
	1: argonChange,
	2: kryptonChange,
	3: xenonChange,
	4: radonChange,
	5: neonChange,
};

// Slider and output elements for font variation settings
var slider1 = document.getElementById("axis1-slider");
var slider2 = document.getElementById("axis2-slider");
var slider3 = document.getElementById("axis3-slider");
var slider4 = document.getElementById("axis4-slider");
var output1 = document.getElementById("axis1");
var output2 = document.getElementById("axis2");
var output3 = document.getElementById("axis3");
var output4 = document.getElementById("axis4");

// Initialize slider output values
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;

// Function to apply the "Argon" theme
function argonChange() {
	document.body.style.fontFamily = fontStyles[0];
	document.documentElement.style.setProperty("--primary", "#89deff");
	document.documentElement.style.setProperty("--secondary", "#c4ebff");
	document.documentElement.style.setProperty("--accent", "#314246");
	// Custom cursor for the Argon theme
	document.documentElement.style.setProperty(
		"--default-cursor",
		`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%23314246" stroke="%2389DEFF" stroke-width="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>'),
		auto`
	);
}

// Function to apply the "Krypton" theme
function kryptonChange() {
	document.body.style.fontFamily = fontStyles[1];
	document.documentElement.style.setProperty("--primary", "#b889ff");
	document.documentElement.style.setProperty("--secondary", "#dcc4ff");
	document.documentElement.style.setProperty("--accent", "#372f46");
	// Custom cursor for the Krypton theme
	document.documentElement.style.setProperty(
		"--default-cursor",
		`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%23372F46" stroke="%23B889FF" stroke-width="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>'),
		auto`
	);
}

// Function to apply the "Neon" theme
function neonChange() {
	document.body.style.fontFamily = fontStyles[2];
	document.documentElement.style.setProperty("--primary", "#fe7e73");
	document.documentElement.style.setProperty("--secondary", "#ffb9b3");
	document.documentElement.style.setProperty("--accent", "#442d2b");
	// Custom cursor for the Neon theme
	document.documentElement.style.setProperty(
		"--default-cursor",
		`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%23442D2B" stroke="%23FE7E73" stroke-width="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>'),
		auto`
	);
}

// Function to apply the "Radon" theme
function radonChange() {
	document.body.style.fontFamily = fontStyles[3];
	document.documentElement.style.setProperty("--primary", "#fef073");
	document.documentElement.style.setProperty("--secondary", "#fff7af");
	document.documentElement.style.setProperty("--accent", "#44422b");
	// Custom cursor for the Radon theme
	document.documentElement.style.setProperty(
		"--default-cursor",
		`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%2344422B" stroke="%23FEF073" stroke-width="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>'),
		auto`
	);
}

// Function to apply the "Xenon" theme
function xenonChange() {
	document.body.style.fontFamily = fontStyles[4];
	document.documentElement.style.setProperty("--primary", "#4cffa0");
	document.documentElement.style.setProperty("--secondary", "#8bffc1");
	document.documentElement.style.setProperty("--accent", "#244633");
	// Custom cursor for the Xenon theme
	document.documentElement.style.setProperty(
		"--default-cursor",
		`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%23244633" stroke="%234CFFA0" stroke-width="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>'),
		auto`
	);
}

// Update slider output values dynamically
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

// Intersection Observer to add "visible" class to elements when they come into view
const elements = document.querySelectorAll(".scroll-fade");
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
		}
	});
});
elements.forEach((el) => observer.observe(el));

// Font variation sliders and the letter set container
const fontSizeSlider = document.getElementById("axis1-slider");
const fontWeightSlider = document.getElementById("axis2-slider");
const fontWidthSlider = document.getElementById("axis3-slider");
const fontSlantSlider = document.getElementById("axis4-slider");
const letterSet = document.querySelector(".letter-set");

// Function to update font properties dynamically based on slider values
function updateFontProperties() {
	letterSet.style.fontSize = `${fontSizeSlider.value}px`;
	letterSet.style.fontVariationSettings = `"wght" ${fontWeightSlider.value}, "wdth" ${fontWidthSlider.value}, "slnt" ${fontSlantSlider.value}`;
}

// Function to update the hero text dynamically based on user input
function customType() {
	let input = document.getElementById("custom-input").value;
	let output = document.getElementById("custom-text");
	output.innerHTML = input;
}
