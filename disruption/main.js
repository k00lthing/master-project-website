import '../style.scss'
import { createHeader } from '../components/header.js'
import { createNav } from '../components/navigation.js'
import { createLightbox } from '../components/lightbox.js'
import Glide from '@glidejs/glide'
import * as placeholders from '../src/placeholders.json'
import * as pangrams from '../src/pangrams.json'

createHeader(document.querySelector('body'))
createNav(document.querySelector('body'))

new Glide('.glide.concept').mount()
new Glide('.glide.test').mount()

createLightbox(document.querySelector('body'))

const root = document.documentElement;
const form = document.querySelector("form.font-controls");
const textInput = document.querySelector("#demo-text-input");
const placeholderTrigger = document.querySelector("#placeholder");
const pangramTrigger = document.querySelector("#pangram");
const fontsizeDropdown = document.querySelector("#demo-font-size-dropdown");
const fontsizeCustom = document.querySelector("#demo-font-size-custom");
const resultBox = document.querySelector(".demo-result");
const axisInput = document.querySelector("#demo-axis");



textInput.addEventListener("change", (event) => {
    resultBox.textContent = `${event.target.value}`;
});

placeholderTrigger.addEventListener("click", (event) => {
    resultBox.textContent = placeholders.data[Math.floor(Math.random() * placeholders.data.length)];
});

pangramTrigger.addEventListener("click", (event) => {
    resultBox.textContent = pangrams.data[Math.floor(Math.random() * pangrams.data.length)];
});

fontsizeDropdown.addEventListener("change", (event) => {
    resultBox.style.fontSize = `${event.target.value}px`;
});

fontsizeCustom.addEventListener("change", (event) => {
    resultBox.style.fontSize = `${event.target.value}px`;
});

axisInput.addEventListener("change", (event) => {
    root.style.setProperty('--disruption-font-axis', event.target.value);

});

form.onreset = () => {
    resultBox.textContent = pangrams[Math.floor(Math.random() * pangrams.length)];
    root.style.setProperty('--disruption-font-axis', 600);
    resultBox.style.fontSize = '5rem'
}
