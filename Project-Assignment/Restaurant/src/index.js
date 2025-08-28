import "./style.css"
import { buildDOMNow } from "./domBuilder.js"
import {buildDom} from "./menu.js"
import buildContact from "./contact.js"
// Build the DOM structure immediately
function main(){
  buildDOMNow();
  let button = document.querySelector(".home")
  button.classList.add("burn-btn")
}

function clearHightLight(){
    let navButton = document.querySelectorAll(".nav")
    navButton.forEach(button => {
      button.classList.remove("burn-btn")
    })
}

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.home')) {
    clearHightLight()
    document.querySelector('#content').innerHTML = '';
    buildDOMNow();
    let button = document.querySelector(".home")
    button.classList.add("burn-btn")
  } else if (target.matches('.menu')) {
    clearHightLight()
    let button = document.querySelector(".menu")
    button.classList.add("burn-btn")
    document.querySelector('#content').innerHTML = '';
    buildDom();
  } else if (target.matches('.contact')) {
    clearHightLight()
    let button = document.querySelector(".contact")
    button.classList.add("burn-btn")
    document.querySelector('#content').innerHTML = '';
    buildContact();
  }
});


main()
