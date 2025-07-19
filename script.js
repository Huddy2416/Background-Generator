const css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.getElementById("randomButton");
/*function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}*/

const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1}, ${color2})`,
	css.textContent = `${body.style.background};`
};

/*function inputInfo() {
return (body.style.background.value);
}*/
 
const inputInfo =( => body.style.background);

/*function r() {
	 return Math.floor(Math.random() * 255);
	 }
	*/

	r = () => Math.floor(Math.random() * 255);

/*function randomGradient() {
	const color3 = 'rgb(' + r() + "," + r() + "," + r() + ')';
	const color4 = 'rgb(' + r() + "," + r() + "," + r() + ')';
	body.style.background = 
	"linear-gradient(to right, " 
	+ color3
	+ ", " 
	+ color4
	+ ")";

	css.textContent = body.style.background + ";";
}
*/
const randomGradient = () => {
	const color3 = `rgb( ${r()}, ${r()}, ${r()})`;
	const color4 = `rgb( ${r()}, ${r()}, ${r()})`;
	body.style.background = `linear-gradient(to right, ${color3}, ${color4})`,
	console.log("button clicked");
};

inputInfo();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener ("click", randomGradient);
