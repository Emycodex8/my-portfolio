let btnSubmit = document.getElementById("btnSubmit")
 

btnSubmit.addEventListener("click", function(e){
    e.preventDefault();

    let fName = document.getElementById("fname")
    let lName = document.getElementById("lname")
    let pWord = document.getElementById("pword")
    let pNum = document.getElementById("pnum")

    // errors
    let fNameError = document.getElementById("fname-error")
    let lNameError = document.getElementById("lname-error")
    let pWordError = document.getElementById("pword-error")
    let pNumError = document.getElementById("pnum-error")

    let isValid = true;
    if(isValid){
      fNameError.textContent = ''
      lNameError.textContent = ''
      pWordError.textContent = ''
      pNumError.textContent = ''
     }

    if(fName.value === ""){
       fNameError.textContent = "This field is required!"
       isValid = false 
    }
    if(lName.value === ""){
        lNameError.textContent = "This field is required!"
        isValid = false 
     }
     if(pWord.value === ""){
        pWordError.textContent = "This field is required!"
        isValid = false 
     }
     if(pNum.length <= 11 ){
        pNumError.textContent = "This field is required!"
        isValid = false 
     }

    
    
        return isValid
    
})