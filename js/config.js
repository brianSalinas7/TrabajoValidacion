
let config = document.querySelector(".icono-config");
let form = document.querySelector("#form");
let ruedaConfig = document.querySelector("#ruedita-config");


function abrirConfig (){

    config.addEventListener("click",() => {
        form.classList.toggle("d-none");
        ruedaConfig.classList.toggle("icono-config-anim");
        
        let iPerfil= document.querySelector("#info-perfil").classList.toggle("d-none");
    })
}
abrirConfig();



//INPUTS
let nombre = document.querySelector("#nombre-form");
let apellido = document.querySelector("#apellido-form");
let edad = document.querySelector("#edad-form");
let email = document.querySelector("#mail-form");
let nacionalidad = document.querySelector("#nac-form");

//BOTON FORM
let btnForm = document.querySelector("#btn-form");

//background
let headerPerfil = document.querySelector("#header");
let btnPhoto = document.querySelector("#bg-photo");
let btnDefault = document.querySelector("#bg-default");
let nombreheader = document.querySelector("#nombre-header");

btnForm.addEventListener("click", () => {

    
    let namePerfil = document.querySelector("#name").innerHTML = nombre.value;
    let surnamePerfil = document.querySelector("#surname").innerHTML = apellido.value;
    let agePerfil = document.querySelector("#age").innerHTML = edad.value;
    let nacPerfil = document.querySelector("#nac").innerHTML = nacionalidad.value;
    let emailPerfil = document.querySelector("#email").innerHTML = email.value;
    
    
    
    nombreheader.innerHTML = nombre.value;
    
    
    
    
    




    form.classList.add("d-none");
    let iPerfil= document.querySelector("#info-perfil").classList.toggle("d-none");
   
    
   
})

btnPhoto.addEventListener("click", () =>{
    headerPerfil.classList.remove("header-default");
    headerPerfil.classList.add("header-1");
    nombreheader.classList.add("user-color");
})
btnDefault.addEventListener("click", () => {
    headerPerfil.classList.remove("header-1");
    headerPerfil.classList.add("header-default");
})

