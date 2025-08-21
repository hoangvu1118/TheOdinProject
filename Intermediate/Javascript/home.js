function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator")
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read?"Completed" : "Not Read Yet"}`
    }
}

let test = new Book("Super Memory", "Eran Katz", "356", false)
console.log(test.info())
