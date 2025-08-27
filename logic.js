// document.getElementById("exclusive").innerText = 5
let exclu = document.getElementById("exclusive")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
   count += 1
   exclu.textContent = count     
}
increment()

function save(){
    let savour = count + " " + "- ";
    saveEl.textContent += savour
    exclu.textContent = 0
    count = 0
}
   save()




  











