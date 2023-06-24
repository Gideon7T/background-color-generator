var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

function setColor1Gradient(){
    body.style.background = `linear-gradient(to right, 
        ${color1.value}, 
        ${color2.value})`;

 css.textContent = `${body.style.background};`;

};
 function setColor2Gradient(){
    body.style.background = `linear-gradient(to left, 
        ${color1.value}, 
        ${color2.value})`;

css.textContent = `${body.style.background};`;

 };

 


color1.addEventListener("input", setColor1Gradient);

color2.addEventListener("input", setColor2Gradient);






