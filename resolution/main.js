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

const placeholders = ["Very easy to work these to death. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. Let's put some happy trees and bushes back in here. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue I think there's an artist hidden in the bottom of every single one of us. God gave you this gift of imagination. Use it.", "Slap owner's face at 5am until human fills food dish chase ball of string the fat cat sat on the mat bat away with paws but lick arm hair. Wake up human for food at 4am i do no work yet get food, shelter, and lots of stuff just like man who lives with us sun bathe drink water out of the faucet for push your water glass on the floor plan steps for world domination. Grab pompom in mouth and put in water dish chase the pig around the house but terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry but sitting in a box but your pillow is now my pet bed. Kitty kitty pussy cat doll. Eat a plant, kill a hand chase after silly colored fish toys around the house. Proudly present butt to human chase ball of string chill on the couch table. Lick butt refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am but have my breakfast spaghetti yarn cat ass trophy, so plop down in the middle where everybody walks mice. Chase dog then run away plays league of legends. Attack the child run up and down stairs ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss so the best thing in the universe is a cardboard box or walk on keyboard . What a cat-ass-trophy! destroy couch, or attack like a vicious monster and nyan fluffness ahh cucumber! but drink water out of the faucet. Jump around on couch, meow constantly until given food, meowing non stop for food for fooled again thinking the dog likes me human is behind a closed door, emergency! abandoned! meeooowwww!!!. Meow loudly just to annoy owners.", "Placeholder 3"];
const pangrams = ["The quick brown fox jumps over a lazy dog.", "Two driven jocks help fax my big quiz.", "Sixty zippers were quickly picked from the woven jute bag.", "Sphinx of black quartz, judge my vow.", "A wizard’s job is to vex chumps quickly in fog.", "How vexingly quick daft zebras jump!", "Pack my box with five dozen liquor jugs."]

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
