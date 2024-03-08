var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color3");
var body = document.getElementById("gredient");

function setGradient() {
    body.style.background = "linear_fredient( to right ," + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";"
}

// Adding Event Listner
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)