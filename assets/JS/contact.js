var nameInput = document.getElementById("nameInput")
var emailInput = document.getElementById("emailInput")
var phoneInput = document.getElementById("phoneInput")
var ageInput = document.getElementById("ageInput")
var passwordInput = document.getElementById("passwordInput")
var repasswordInput = document.getElementById("repasswordInput")


function disableBtn(){
    document.getElementById("submitBtn").disabled=true
}
function enableBtn(){
    document.getElementById("submitBtn").disabled=false
}


function inputsValidation() {
    


    nameInput.addEventListener("keyup",function(){
        if (/^[a-zA-Z]+$/.test(nameInput.value)) {
            document.getElementById("nameAlert").classList.add( "d-none")
            enableBtn()
        } else {
            document.getElementById("nameAlert").classList.remove("d-none")
            disableBtn()
            
        }
    })




  emailInput.addEventListener("keyup",function(){

        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value))         {
            document.getElementById("emailAlert").classList.add( "d-none")
            enableBtn()
        } else {
            document.getElementById("emailAlert").classList.remove("d-none")
            disableBtn()
        }
    })

    phoneInput.addEventListener("keyup",function(){
        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput)){
            document.getElementById("phoneAlert").classList.add( "d-none")
            enableBtn()
        } else {
            document.getElementById("phoneAlert").classList.remove("d-none")
            disableBtn()
        }
    })

    ageInput.addEventListener("keyup",function(){
        if (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(ageInput)) {
            document.getElementById("ageAlert").classList.add( "d-none")
            enableBtn()
        } else {
            document.getElementById("ageAlert").classList.remove("d-none")
            disableBtn()}
    })

    passwordInput.addEventListener("keyup",function(){
        if (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(passwordInput)){
            document.getElementById("passwordAlert").classList.add( "d-none")
            enableBtn()
        } else {
            document.getElementById("passwordAlert").classList.remove("d-none")
            disableBtn()
        }
    })
    repasswordInput.addEventListener("keyup",function(){
        if  (repasswordInput.value ==passwordInput.value)
        {
            document.getElementById("repasswordAlert").classList.add( "d-none")
            enableBtn()
        } else {
            document.getElementById("repasswordAlert").classList.remove("d-none")
            disableBtn()
        }
    })

    
   
}

$(window).on('load', function() {
    $('#preloader').fadeOut('slow', function() {
        $('#content').fadeIn('slow');
    });
});
inputsValidation()