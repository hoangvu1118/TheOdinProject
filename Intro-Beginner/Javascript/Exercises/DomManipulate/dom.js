// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const text = document.createElement("p")
text.textContent = "Hey I'm red!"
text.style["color"] = "red";
container.appendChild(text)

const header = document.createElement("h3")
header.textContent = "I'm a blue h3!"
header.style.color = "blue"
container.appendChild(header)

const div2 = document.createElement("div")
div2.style["border"] = '2px dashed black';
div2.style["backgroundColor"]= "pink";

const subHead = document.createElement("h1")
subHead.textContent = "I'm in a div"
subHead.style.color = "red"
div2.appendChild(subHead)

const newP = document.createElement("p")
newP.textContent = "ME TOO!"
div2.appendChild(newP)

document.body.appendChild(div2)

const btn = document.querySelector("#btn")
btn.onclick = () => alert("Hello World")

const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
    alert("Hello New Click!")
})

btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
