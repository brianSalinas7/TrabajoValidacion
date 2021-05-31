    let btn = document.querySelector("#registro-btn");
    //SALIDA
    let alertEmail = document.querySelector("#emailHelp");
    let alertPass1 = document.querySelector("#password-help1");
    let alertPass2 = document.querySelector("#password-help2");

    //ENTRADA
    let registro = document.querySelector("#registro-email");
    let password1 = document.querySelector("#registro-password1");
    let password2 = document.querySelector("#registro-password2");
    
    const validarFoco = ()=>{

        registro.addEventListener("blur",() =>{
            caracteresPermitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            console.log(registro.value)
            if(caracteresPermitidos.test(registro.value)){
                
                alertEmail.innerHTML="✅ email correcto";
                alertEmail.classList.remove("error-msg");
                alertEmail.style.color= "green";
            }else{
                alertEmail.innerHTML="❌ El campo debe contener `@` y `.com`"
                alertEmail.classList.add("error-msg");
                alertEmail.style.color= "red";
                
            }
        })
        
        password1.addEventListener("blur", () =>{
            if(password1.value.length<12){
                alertPass1.classList.add("error-msg");
                alertPass1.style.color= "red";
                alertPass1.innerHTML="❌ La contraseña no contiene mas de 12 caracteres";
            }else{
                alertPass1.innerHTML="✅ La contraseña es segura";
                alertPass1.classList.remove("error-msg");
                alertPass1.style.color= "green";
            }
        })
    
        password2.addEventListener("blur", ()=>{
            if(password2.value!==password1.value){
                alertPass2.classList.add("error-msg");
                alertPass2.style.color= "red";
                alertPass2.innerHTML="❌ compruebe que las contraseñas sean iguales";
            }else{
                alertPass2.innerHTML="✅ Las contraseñas coinciden";
                alertPass2.classList.remove("error-msg");
                alertPass2.style.color= "green";
            }
        })
        
        
    }

    validarFoco();  
 
    btn.addEventListener("click",() => {
        
        caracteresPermitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(caracteresPermitidos.test(registro.value)){
            if(password1.value.length<12){
                alertPass1.innerHTML="❌ La contraseña no contiene mas de 12 caracteres";
                alertPass1.classList.add("error-msg");
                
            }else{
                alertPass1.innerHTML="Contraseña valida";
                if(password2.value !== password1.value){
                    alertPass2.innerHTML="❌ compruebe que las contraseñas sean iguales";
                    alertPass2.classList.add("error-msg");
                    
                }else{
                    alertPass2.innerHTML="✅ Las contraseñas coinciden";
                    alertPass2.classList.remove("error-msg");
                    alertPass2.style.color= "green";
                    window.open("../perfil.html","_self");
                    
                }
            }
            
        }else{
            alertEmail.innerHTML=`*campo obligatorio. Debe contener "@"/ ".com"`
            alertEmail.classList.add("error-msg");
            
        }
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    