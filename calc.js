let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("sum-el")
function add(){
    let addMe = num1 + num2;
    sumEL.textContent =  "Result: " + addMe

}
function subtract(){
    let subtractMe = num1 - num2;
    sumEL.textContent =  "Result: " + subtractMe
}
function divide(){
    let divideMe = num1 / num2;
    sumEL.textContent =  "Result: " + divideMe
}
function multiply(){
    let multiplyMe = num1 * num2;
    sumEL.textContent =  "Result: " + multiplyMe  
}