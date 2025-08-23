function Book(id,title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator")
    }
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read?"Completed" : "Not Read Yet"}`
    }
}

const myLibrary = []

function addBookToLibrary(title, author, pages, read) {
    let id = crypto.randomUUID()
    let book = new Book(id, title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary("Super Memory", "Eran Katz", "357", true)
addBookToLibrary("Crazy Memory", "Katze Wang", "162", false)
addBookToLibrary("Super Duber", "Evan Tahan", "37", false)
addBookToLibrary("KingKong2", "Monkey Aatz", "29", true)


const formBox = document.querySelector("#form-box")
let create_Book = document.querySelector(".function.add")
create_Book.addEventListener("click", () => {
    formBox.style.display = 'flex'
})

const booksForm = document.querySelector("#forms")
booksForm.addEventListener("submit", (e) => {
    if (!booksForm.checkValidity()) {
        booksForm.reportValidity();
        return;
    }
    e.preventDefault()
    const formData = new FormData(booksForm)
    let title = formData.get("title")
    let author = formData.get("author")
    let pages = formData.get("pages")
    // formData returns strings for option values, convert to boolean
    let read = formData.get("read") === 'true'
    addBookToLibrary(title, author, pages, read)
    formBox.style.display = 'none'
    updateShelf()
    numberOfBook += 1
    booksForm.reset()
})
let numberOfBook = 0
let shelf = document.querySelector(".shelf")
function updateShelf(){
    let i = numberOfBook
    for (; i < myLibrary.length; i++){
        let boxSquare = document.createElement("div")
        let readStatus = myLibrary[i].read
        boxSquare.classList.add("book")
        boxSquare.dataset.id = myLibrary[i].id
        shelf.appendChild(boxSquare)
        boxSquare.textContent = myLibrary[i].title
        shelf.scrollTop = shelf.scrollHeight
        interactWithBook(boxSquare, readStatus)
    }
}

function interactWithBook(book, readStatus){
    let viewButton = document.createElement("button")
    let deleteButton = document.createElement("button")
    let toggleReadStatus = document.createElement("input")

    // keep checkbox and label without using duplicated IDs
    const label = document.createElement("label");
    toggleReadStatus.type = "checkbox"
    // pre-check according to readStatus
    toggleReadStatus.checked = !!readStatus

    viewButton.classList.add("viewButton")
    viewButton.textContent = "View"

    deleteButton.classList.add("deleteBook")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', () =>{
        const id = book.dataset.id
        const idx = myLibrary.findIndex(b => b.id === id);
        if(idx > -1) myLibrary.splice(idx, 1)
        book.remove()
        numberOfBook -= 1
    })

    label.appendChild(toggleReadStatus)
    label.append(" Read")
    book.append(viewButton, deleteButton, label)
    processReadStatus(book, toggleReadStatus, readStatus)
}

function processReadStatus(book, checkbox ,readStatus){
    if(readStatus == true){
        book.style.border = '5px solid #7CFC00'
        // use the standard checked property
        checkbox.checked = true
    }
    else{
    book.style.border = '5px solid grey';
    checkbox.checked = false
    }
}

