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

// addBookToLibrary("Super Memory", "Eran Katz", "357", true)
// addBookToLibrary("Crazy Memory", "Katze Wang", "162", false)
// addBookToLibrary("Super Duber", "Evan Tahan", "37", false)
// addBookToLibrary("KingKong2", "Monkey Aatz", "29", true)


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
    console.log(read)
    addBookToLibrary(title, author, pages, read)
    formBox.style.display = 'none'
    updateShelf()
    booksForm.reset()
})

let numberOfBook = 0
let shelf = document.querySelector(".shelf")
function updateShelf(){
    numberOfBook += 1
    for (let i = numberOfBook-1; i < myLibrary.length; i++){
        let boxSquare = document.createElement("div")
        console.table(myLibrary)
        let readStatus = myLibrary[i].read
        boxSquare.classList.add("book")

        boxSquare.dataset.id = myLibrary[i].id
        boxSquare.dataset.title = myLibrary[i].title
        boxSquare.dataset.author = myLibrary[i].author
        boxSquare.dataset.pages = myLibrary[i].pages
        boxSquare.dataset.read = myLibrary[i].read
        
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
    toggleReadStatus.dataset.id = book.dataset.id

    // keep checkbox and label without using duplicated IDs
    const label = document.createElement("label");
    toggleReadStatus.type = "checkbox"
    // pre-check according to readStatus
    toggleReadStatus.checked = !!readStatus
    toggleReadStatus.classList.add("checkBox")
    
    viewButton.classList.add("viewButton")
    viewButton.textContent = "View"
    viewButton.addEventListener("click", () => {
        displayBookData(book)
    })

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

    checkbox.addEventListener('change', () => {
        const id = checkbox.dataset.id;
        const idx = myLibrary.findIndex(b => b.id === id);
        if (idx > -1) {
            myLibrary[idx].read = checkbox.checked;
            book.dataset.read = checkbox.checked
            processReadStatus(book, checkbox, checkbox.checked);
        }
    });
}

function displayBookData(book){
    let dialog = document.createElement("dialog")
    dialog.classList.add("showBook")
    let closeDialog = document.createElement("button")
    let id = document.createElement("p")
    let title = document.createElement("p")
    let author = document.createElement("p")
    let pages = document.createElement("p")
    let read = document.createElement("p")

    id.textContent = "ID: " + book.dataset.id
    title.textContent = "Title: " + book.dataset.title
    author.textContent ="Author: " + book.dataset.author
    pages.textContent = "Pages: "+ book.dataset.pages
    read.textContent = "Complete: "+ book.dataset.read
    closeDialog.textContent = 'Close'
    closeDialog.addEventListener('click', () => dialog.close());

    dialog.append(id, title, author, pages, read, closeDialog)
    document.body.appendChild(dialog)
    dialog.showModal()
}
