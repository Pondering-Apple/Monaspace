document.addEventListener("DOMContentLoaded", function () {
	typing();
	const heroInput = document.getElementById("hero-input");
	heroInput.addEventListener("input", function () {
		customType();
	});
});

let i = 0;
let txt = "Lorem ipsum typing effect!"; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typing() {
	if (i < txt.length) {
		document.getElementById("hero-type").innerHTML += txt.charAt(i);
		i = i + 1;
		setTimeout(typing, speed);
	}
}

function customType() {
	let input = document.getElementById("hero-input").value; // Use .value to get the input value
	let hero = document.getElementById("hero-type");
	hero.innerHTML = input; // Update the hero-type element with the input value
}
