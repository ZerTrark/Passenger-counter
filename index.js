// document.getElementById("count").innerText = 5


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "

    saveEl.innerText += countStr

    countEl.innerText = count
}


