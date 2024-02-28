import '../style.scss'
import { createHeader } from '../components/header.js'
import { createNav } from '../components/navigation.js'
import { createLightbox } from '../components/lightbox.js'
import Glide from '@glidejs/glide'

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

const placeholders = ["Bold Balance","Cursive Creations", "Geometric Grotesque", "Sleek Sans Serif", "Whimsical Script", "Geometric Gems", "Serif Symphony", "Italic Intermezzo","Calligraphic charm", "Symmetrical Serenity", "Modern Monospace", "Dynamic Fontscape", "Vintage Vibes", "Harmonious Hues","Expressive Elements", "Subtle Strokes", "Whitespace Whispers", "Refined Rhythms", "Jovial Juxtapositions", "Noble Notches", "Angular Accents", "Playful Pictograms"];
const pangrams = ["The quick brown fox jumps over a lazy dog", "Two driven jocks help fax my big quiz", "Sixty zippers were quickly picked from the woven jute bag", "How vexingly quick daft zebras jump", "Pack my box with five dozen liquor jugs","Grumpy wizards make toxic brew for the evil queen and jack", "DJs flock by when MTV ax quiz prog", "Woven silk pyjamas exchanged for blue quartz", "Prating jokers quizzically vexed me with fibs"]


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

form.onreset = () => {
    resultBox.textContent = pangrams[Math.floor(Math.random() * pangrams.length)];
    root.style.setProperty('--resolution-font-axis', 800);
    resultBox.style.fontSize = '5rem'
}
