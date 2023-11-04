import '../style.scss'
import { createHeader } from '../components/header.js'
import { createNav } from '../components/navigation.js'

createHeader(document.querySelector('body'))
createNav(document.querySelector('body'))
   
const root = document.documentElement;

const textInput = document.querySelector("#demo-text-input");
const placeholderTrigger = document.querySelector("#placeholder");
const pangramTrigger = document.querySelector("#pangram");
const fontsizeDropdown = document.querySelector("#demo-font-size-dropdown");
const fontsizeCustom = document.querySelector("#demo-font-size-custom");
const resultBox = document.querySelector(".demo-result");
const axisInput = document.querySelector("#demo-axis");

const placeholders = ["Very easy to work these to death The very fact that youre aware of suffering is enough reason to be overjoyed that you're alive and can experience it Let's put some happy trees and bushes back in here I'm gonna start with a little Alizarin crimson and a touch of Prussian blue I think there's an artist hidden in the bottom of every single one of us God gave you this gift of imagination Use it", "Placeholder 3"];
const pangrams = ["The quick brown fox jumps over a lazy dog", "Two driven jocks help fax my big quiz", "Sixty zippers were quickly picked from the woven jute bag", "How vexingly quick daft zebras jump", "Pack my box with five dozen liquor jugs"]

textInput.addEventListener("change", (event) => {
    resultBox.textContent = `${event.target.value}`;
});

placeholderTrigger.addEventListener("click", (event) => {
    resultBox.textContent = placeholders[Math.floor(Math.random() * placeholders.length)];
});

pangramTrigger.addEventListener("click", (event) => {
    resultBox.textContent = pangrams[Math.floor(Math.random() * pangrams.length)];
});


fontsizeDropdown.addEventListener("change", (event) => {
    resultBox.style.fontSize = `${event.target.value}px`;
});

fontsizeCustom.addEventListener("change", (event) => {
    resultBox.style.fontSize = `${event.target.value}px`;
});

axisInput.addEventListener("change", (event) => {
    root.style.setProperty('--resolution-font-axis', event.target.value);

});
