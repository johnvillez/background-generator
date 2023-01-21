const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const body = document.getElementById('gradient');

// css.textContent = body.style.background + ";";

// Testing if selector works
// console.log(css);
// console.log(color1);
// console.log(color2);

//Change background color to whatever is the value of the color picker
function changeGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}

// Generate random RGB values
function randomRGB() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const RGB = "rgb(" + x + "," + y + "," + z + ")";  
    return RGB;
  }

// Change background to the generated random RGB
function randomize() {
    body.style.background = `linear-gradient(to right, ${randomRGB()}, ${randomRGB()})`;
    css.textContent = body.style.background + ";";
}

// Event Listeners
button1.addEventListener('click', randomize);
color1.addEventListener('input', changeGradient);
color2.addEventListener('input', changeGradient);


