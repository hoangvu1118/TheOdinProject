const dots = document.querySelectorAll(".dot")
const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
  
    const activateSlide = document.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activateSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length ) newIndex = 0
    
    slides.children[newIndex].dataset.active = true;
    delete activateSlide.dataset.active

    dots.forEach((dot, idx) => {
      dot.toggleAttribute("data-active-dot", idx === newIndex);
    });
  })
})

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    const activeDot = document.querySelector("[data-active-dot]")
    delete activeDot.dataset.activeDot
    
    const dot = document.querySelector("[showActiveDot]")
    dot.children[idx].toggleAttribute("data-active-dot")
    
    const activateSlide = document.querySelector("[data-active]")
    const slides = document.querySelector("[data-slides]")
    slides.children[idx].dataset.active = true;

    
    delete activateSlide.dataset.active
  })
})
