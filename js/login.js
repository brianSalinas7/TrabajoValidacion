// ID DE IMPUT MAIL LOGIN =  id="login-email"
// ID INPUT PASS LOGIN = id="login-password"




//input 
let email = document.querySelector("#login-email");
let pass = document.querySelector("#login-password");
//alertas
let alertemail = document.querySelector("#login-help");
let alertpass = document.querySelector("#login-password-help1");
//boton
let btn = document.querySelector("#login-btn");
  
   btn.addEventListener("click", () => {
        caracteresPermitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(!caracteresPermitidos.test(email.value)){
            alertemail.innerHTML= `Email Invalido. Revise que cumpla la estructura "usuario@servidor.com"`
            alertemail.classList.add("error-msg");
        }else{

            alertemail.innerHTML = ``;
            alertemail.classList.remove("error-msg");
        }
        if (pass.value.length<12){
            alertpass.classList.add("error-msg");

        }
        
        else{
            alertpass.classList.remove("error-msg");
            window.open("../perfil.html", "_self");
        }
       
    })




