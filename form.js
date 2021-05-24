document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form")
  const firstName = document.getElementById('first-name')
  const lastName = document.getElementById('last-name')
  const phoneNumber = document.getElementById('phone-number')  
  const email = document.getElementById('email')  
  const textArea = document.getElementById('message')
  const inputStyle = document.querySelectorAll('.form div input')
  const popUp = document.getElementById('popUpBox')
  const closeButton = document.getElementById('closeModal')
  

  
    form.onsubmit = (e) => {
        e.preventDefault() 

        validFirstName = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(firstName.value)
        validLastName = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(lastName.value)
        validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)
        validPhoneNumber = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(phoneNumber.value)  
        
        let validTextArea = false

        if (textArea.value.length > 0) {
            validTextArea = true
        }

        console.log(validTextArea)
        console.log(textArea.value)

        let emptyPhoneNumber = false

        if (phoneNumber.value === '') {
            emptyPhoneNumber = true
        }

        for (i = 0; i < inputStyle.length; i++) { 
            inputStyle[i].style.webkitTextFillColor="black" 
        }
        
        textArea.style.webkitTextFillColor="black"
        

        
        if (validFirstName && validLastName && (validPhoneNumber || emptyPhoneNumber) && validEmail && validTextArea) {
            popUp.showModal()
            form.reset()
        }
        else if (validFirstName === false) {
            firstName.style.webkitTextFillColor="red"
        }
        else if (validLastName === false) {
            lastName.style.webkitTextFillColor="red"
        }
        else if (validEmail === false) {
            email.style.webkitTextFillColor="red"
        }
        else if (validPhoneNumber === false) {
            phoneNumber.style.webkitTextFillColor="red"
        }
        else if (validTextArea === false) {
            textArea.style.webkitTextFillColor="red"
        }

    }

    closeButton.onclick = () => {
        popUp.close()
    }
})