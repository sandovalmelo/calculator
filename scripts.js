// change theme DOM elements
const btnOne = document.getElementById("btn-1");
const btnTwo = document.getElementById("btn-2");
const btnThree = document.getElementById("btn-3");

const radioOne = document.getElementById("radio-1");
const radioTwo = document.getElementById("radio-2");
const radioThree = document.getElementById("radio-3");

// calculator DOM elements
const keys = document.querySelector(".keys");
const ball = document.querySelector(".ball");
const result = document.querySelector(".result");

let expression = "";

// change themes events

btnOne.addEventListener("click", () => changeTheme("one", "4px"));
radioOne.addEventListener("change", () => changeTheme("one", "4px"));

btnTwo.addEventListener("click", () => changeTheme("two", "38px"));
radioTwo.addEventListener("change", () => changeTheme("two", "38px"));

btnThree.addEventListener("click", () => changeTheme("three", "72px"));
radioThree.addEventListener("change", () => changeTheme("three", "72px"));

function changeTheme(position, distance) {
	document.documentElement.setAttribute("data-theme", position);
	ball.style.left = distance;
}

// calculator function
keys.addEventListener("click", (event) => {
	if (event.target.classList.contains("keys")) {
		return;
	}

	if (event.target.classList.contains("key-plus") && expression === "") return;
	if (event.target.classList.contains("key-minus") && expression === "") return;
	if (event.target.classList.contains("key-division") && expression === "") return;
	if (event.target.classList.contains("key-multiplication") && expression === "") return;

	if (event.target.classList.contains("key-reset")) {
		expression = "";
		result.innerText = expression;
		return;
	}

	if (event.target.classList.contains("key-del")) {
		expression = expression.slice(0, -1);
	}

	if (event.target.classList.contains("key-equal")) {
		if (expression !== "") {
			expression = String(eval(expression));
			result.innerText = numberWithCommas(eval(expression));
			return;
		}
	}

	expression = expression + event.target.value;
	result.innerText = numberWithCommas(expression);
});

function numberWithCommas(x) {
	x = x.toString();
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
	return x;
}
