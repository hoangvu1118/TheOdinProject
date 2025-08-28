function createDiv(){
    let insideContact = document.createElement("div")
    insideContact.classList.add("inside-contact")

    const persons = [
        {name : "Gordan Ramsey", gmail: "random@gmail.com", tel:"0210401240", class:"cook"},
        { name:"Spider Man", class:"cook", gmail:"idonknow@gmail.com", tel:"12591925"},
        { name:"Tony Stark", class:"cook", gmail:"stillNothing@gmail.com", tel:"523403253"}
    ];

    persons.forEach(employee => {
        let data = document.createElement("div")
        data.classList.add("employee-data")

        const name = document.createElement("p")
        name.className = employee.class
        name.textContent = "Name: " + employee.name

        const gmail = document.createElement("p")
        gmail.className = employee.class
        gmail.textContent = "Gmail: " + employee.gmail

        const tel = document.createElement("p")
        tel.className = employee.class
        tel.textContent ="Tel: " + employee.tel

        data.append(name, gmail, tel)
        insideContact.appendChild(data)
    })
    return insideContact
}





function buildCompleteDOM(){
    let content = document.querySelector("#content")
    content.innerHTML = '';
    content.style.width = "100%"
    content.style.height = "calc(100vh - 85px)"
    content.style.background = "rgb(42, 41, 41)";
    content.appendChild(createDiv())
}


export default function buildContact(){
    buildCompleteDOM()
}
