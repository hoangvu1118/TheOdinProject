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
addBookToLibrary("KingKong2", "Monkey Aatz", "29", false)


const formBox = document.querySelector("#form-box")
let create_Book = document.querySelector(".function.add")
create_Book.addEventListener("click", () => {
    formBox.style.display = 'flex'
})

const booksForm = document.querySelector(".submit")
booksForm.addEventListener("click", (e) => {
    e.preventDefault()
    const form = document.querySelector("#forms")
    const formData = new FormData(form)
    let title = formData.get("title")
    let author = formData.get("author")
    let pages = formData.get("pages")
    let read = formData.get("read")
    addBookToLibrary(title, author, pages, read)
    console.log(title, author, pages, read)
    formBox.style.display = 'none'
})

console.table(myLibrary)
