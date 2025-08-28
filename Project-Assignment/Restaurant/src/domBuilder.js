// DOM Builder for PizzaForEver Restaurant
// This file dynamically creates all elements and divs based on template.html
import chef from '../assests/chef1.png'
import garden from '../assests/garden.jpg'
import eatplace from '../assests/restaurant.png'
import rooftop from '../assests/pitza-rooftop-seating.jpg'
import kitchen from '../assests/kitchen.png'
import special from '../assests/special.png';
import pepperoni from '../assests/pepperoni.png';
import veggie from '../assests/veggie.png';
import seafood from '../assests/seafood.png';

export function createHeader(){
    const header = document.createElement('header');
    
    const nav = document.createElement('nav');
    
    // Create title
    const title = document.createElement('h1');
    title.textContent = 'PizzaForEver';
    nav.appendChild(title);
    
    // Create navigation buttons
    const buttons = [
        { text: 'Home', class: 'nav home' },
        { text: 'Menu', class: 'nav menu' },
        { text: 'Contact', class: 'nav contact' }
    ];
    
    buttons.forEach(buttonData => {
        const button = document.createElement('button');
        button.className = buttonData.class;
        button.textContent = buttonData.text;
        nav.appendChild(button);
    });
    
    header.appendChild(nav);
    return header;
}

export function createIntroduction() {
    const introduction = document.createElement('div');
    introduction.className = 'introduction';
    
    // Chef image
    const chefImg = document.createElement('img');
    chefImg.src =  chef;
    chefImg.className = 'chef';
    introduction.appendChild(chefImg);
    
    // Lure paragraphs
    const lureParagraphs = [
        'Come to PizzaForEver, We have the best Pizza',
        'You know you want it!'
    ];
    
    lureParagraphs.forEach(text => {
        const p = document.createElement('p');
        p.className = 'lure';
        p.textContent = text;
        introduction.appendChild(p);
    });
    
    // Opening hours title
    const openHourTitle = document.createElement('h4');
    openHourTitle.className = 'open-hour';
    openHourTitle.textContent = 'Opening Hours';
    introduction.appendChild(openHourTitle);
    
    // Hours container
    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hours';
    
    const schedule = [
        { day: 'Monday', hours: '10am - 23pm', class: 'hour days-1' },
        { day: 'Tuesday', hours: '10am - 23pm', class: 'hour days-2' },
        { day: 'Wednesday', hours: '10am - 23pm', class: 'hour days-3' },
        { day: 'Thursday', hours: '10am - 23pm', class: 'hour days-4' },
        { day: 'Friday', hours: '9am - 22pm', class: 'hour days-5' },
        { day: 'Saturday', hours: '8am - 24pm', class: 'hour days-6' }
    ];
    
    schedule.forEach(dayInfo => {
        const p = document.createElement('p');
        p.className = dayInfo.class;
        p.textContent = `${dayInfo.day}: ${dayInfo.hours}`;
        hoursDiv.appendChild(p);
    });
    
    introduction.appendChild(hoursDiv);
    return introduction;
}

export function createInterior() {
    const interior = document.createElement('div');
    interior.className = 'interior';
    
    // Title
    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Interior';
    interior.appendChild(title);
    
    // Interior items
    const interiorItems = [
        { src: garden, alt: '', class: 'picture-1', room: 'Garden' },
        { src: eatplace, alt: '', class: 'picture-2', room: 'Eating Place' },
        { src: rooftop, alt: '', class: 'picture-3', room: 'Rooftop' },
        { src: kitchen, alt: '', class: 'picture-4', room: 'Kitchen' }
    ];
    
    interiorItems.forEach(item => {
        const insideDiv = document.createElement('div');
        insideDiv.className = 'inside';
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.className = item.class;
        insideDiv.appendChild(img);
        
        const roomTitle = document.createElement('h3');
        roomTitle.className = 'room';
        roomTitle.textContent = item.room;
        insideDiv.appendChild(roomTitle);
        
        interior.appendChild(insideDiv);
    });
    
    return interior;
}

export function createBestSeller() {
    const bestSeller = document.createElement('div');
    bestSeller.className = 'best-seller';
    
    // Title
    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Best-seller';
    bestSeller.appendChild(title);
    
    // Best seller items
    const bestSellerItems = [
        { src: special, alt: '', class: 'pizzas-1', name: 'Special Dish' },
        { src: pepperoni, alt: '', class: 'pizzas-2', name: 'Pepperoni Pizza' },
        { src: veggie, alt: '', class: 'pizzas-3', name: 'Veggie Pizza' },
        { src: seafood, alt: '', class: 'pizzas-4', name: 'Seafood Pizza' }
    ];
    
    bestSellerItems.forEach(item => {
        const insideDiv = document.createElement('div');
        insideDiv.className = 'inside';
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.className = item.class;
        insideDiv.appendChild(img);
        
        const pizzaName = document.createElement('h3');
        pizzaName.className = 'pizza-name';
        pizzaName.textContent = item.name;
        insideDiv.appendChild(pizzaName);
        
        bestSeller.appendChild(insideDiv);
    });
    
    return bestSeller;
}

export function createFooter() {
    const footer = document.createElement('div');
    footer.className = 'footer';
    
    const footerTexts = [
        'Need More Sponsor to run this Restaurant',
        'I just feel like i need piza',
        'Can I have a free one'
    ];
    
    footerTexts.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        footer.appendChild(p);
    });
    
    return footer;
}

export function createContentDiv() {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    
    // Add all sections to content
    contentDiv.appendChild(createIntroduction());
    contentDiv.appendChild(createInterior());
    contentDiv.appendChild(createBestSeller());
    contentDiv.appendChild(createFooter());
    
    return contentDiv;
}

export function buildCompleteDOM() {
    // Clear existing body content
    document.body.innerHTML = '';
    
    // Create and append header
    document.body.appendChild(createHeader());
    
    // Create and append content
    document.body.appendChild(createContentDiv());
}

// Function to initialize the DOM on page load
export function initializeDOM() {
    document.addEventListener('DOMContentLoaded', buildCompleteDOM);
}

// Alternative function if you want to build DOM immediately
export function buildDOMNow() {
    buildCompleteDOM();
}
