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

console.table(myLibrary)
