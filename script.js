const css = document.querySelector("h3");
let input1 = document.querySelector(".color1");
let input2 = document.querySelector(".color2");
const body = document.body;
const btn = document.getElementById("randomButton");

const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
	console.log("working");
	css.textContent = `${body.style.background}`;
};


const inputInfo = () =>(body.style.background);


r = () => Math.floor(Math.random() * 255);


const randomGradient = () => {
	const color3 = `rgb( ${r()}, ${r()}, ${r()})`;
	const color4 = `rgb( ${r()}, ${r()}, ${r()})`;
	body.style.background = `linear-gradient(to right, ${color3}, ${color4})`,
	console.log("button clicked");
	css.textContent = `${body.style.background}`;
};

inputInfo();

input1.addEventListener("input", setGradient);

input2.addEventListener("input", setGradient);

btn.addEventListener ("click", randomGradient);