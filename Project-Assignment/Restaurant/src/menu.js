import special from '../assests/special.png';
import pepperoni from '../assests/pepperoni.png';
import seafood from '../assests/seafood.png';
import cocktail from '../assests/tequila.png'
import wine from '../assests/marisa.png'
import cola from '../assests/molecola.png'

function buildOuterDiv(){
    let menu = document.createElement("div")
    menu.classList.add("menuTab")

    const items = [
        {src: special, class: 'item-1', name: "Special Dish", price: "$275"},
        {src: pepperoni, class: 'item-2', name: "Pepperoni Pizza", price: "$110"},
        {src: seafood, class: 'item-3', name: "Seafood Pizza", price: "$189"},
        {src: cocktail, class: 'item-4', name: "Tequilla Sunrise", price : "$79"},
        {src: wine, class: 'item-5', name: "Marisa Cuomo", price: "$199"},
        {src: cola, class: 'item-6', name: "Mole Cola", price: "$5"},
    ];
    items.forEach(item => {
        const insideMenu = document.createElement('div');
        insideMenu.className = 'itemBox'

        const price = document.createElement('div')
        price.className = 'pricetag'

        const priceValue = document.createElement("p")
        priceValue.className = 'price-value'
        priceValue.textContent = item.price
        price.appendChild(priceValue)
        insideMenu.appendChild(price)


        const img = document.createElement('img')
        img.src = item.src
        img.className = item.class
        insideMenu.appendChild(img)

        const itemName = document.createElement("h4")
        itemName.className = 'item-name'
        itemName.textContent = item.name
        insideMenu.appendChild(itemName)

        menu.appendChild(insideMenu)
    })
    return menu
}

export function buildCompleteDOM() {
    // Clear existing body content
    let content = document.querySelector("#content")
    content.innerHTML = '';
    content.style.width = "100%"
    content.style.height = "calc(100vh - 85px)"
    content.style.background = "rgb(42, 41, 41)";
    content.appendChild(buildOuterDiv())
}

export function initializeDOM() {
    document.addEventListener('DOMContentLoaded', buildCompleteDOM);
}


export function buildDom(){
    buildCompleteDOM()
}
