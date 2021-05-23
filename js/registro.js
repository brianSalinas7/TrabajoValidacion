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
            if(registro.value!==caracteresPermitidos){
                alertEmail.innerHTML="debes completar el campo"
                alertEmail.classList.add("error-msg");
            }else{
                alertEmail=alertEmail;
            }
        })
        
        password1.addEventListener("blur", () =>{
            if(password1.value.length<12){
                alertPass1.classList.add("error-msg");
            }
        })
    
        password2.addEventListener("blur", ()=>{
            if(password2.value!==password1.value){
                alertPass2.classList.add("error-msg");
            }
        })
        
        
    }

    validarFoco();  
 
    btn.addEventListener("click",() => {
        
        caracteresPermitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(caracteresPermitidos.test(registro.value)){
            if(password1.value.length<12){
                alertPass1.innerHTML="Error,La contraseña tiene que tener mas de 12 caracteres";
                alertPass1.classList.add("error-msg");
                
            }else{
                alertPass1.innerHTML="Contraseña valida";
                if(password2.value !== password1.value){
                    alertPass2.innerHTML="Las contraseñas no coinciden";
                    alertPass2.classList.add("error-msg");
                    
                }else{
                    alertPass2.innerHTML="CONTRASEÑAS CONCIDEN";
                    alertPass2.classList.add("exito-msg");
                    window.open("https://portfolio-bootstrap-dng.netlify.app/","_self");
                    
                }
            }
            
        }else{
            alertEmail.innerHTML=`*campo obligatorio. Debe contener "@"/ ".com"`
            alertEmail.classList.add("error-msg");
            
        }
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    