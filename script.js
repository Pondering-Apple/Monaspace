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
