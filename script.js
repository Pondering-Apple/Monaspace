document.addEventListener("DOMContentLoaded", function () {
	typing();
	const heroInput = document.getElementById("hero-input");
	heroInput.addEventListener("input", function () {
		customType();
	});
	const characterButton = document.getElementById("characterSet");
	characterButton.addEventListener("click", function () {
		openNav();
	});
});

let i = 0;
let txt = "Lorem ipsum typing effect!";
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

function argonChange() {
	document.body.style.fontFamily = fontStyles[0];
	document.documentElement.style.setProperty("--primary", "#89deff");
	document.documentElement.style.setProperty("--secondary", "#c4ebff");
	document.documentElement.style.setProperty("--accent", "#89deff10");
}
function kryptonChange() {
	document.body.style.fontFamily = fontStyles[1];
}
function neonChange() {
	document.body.style.fontFamily = fontStyles[2];
}
function radonChange() {
	document.body.style.fontFamily = fontStyles[3];
}
function xenonChange() {
	document.body.style.fontFamily = fontStyles[4];
}

function typing() {
	if (i < txt.length) {
		document.getElementById("hero-type").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
}

function deleting() {
	if (i > txt.length) {
		set;
		document.getElementById("hero-type").innerHTML += txt.charAt(i);
		i--;
		setTimeout(deleting, speed);
	}
}

function customType() {
	let input = document.getElementById("hero-input").value; // Use .value to get the input value
	let hero = document.getElementById("hero-type");
	if (input.length == 0) {
		hero.innerHTML = ""; // Clear the hero-type element
		i = 0; // Reset the typing index
		setTimeout(typing, typeDelay);
	} else {
		hero.innerHTML = input; // Update the hero-type element with the input value
	}
}

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}
