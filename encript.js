const d= document;
const textarea= d.querySelector(".form__input");
const imagenbusqueda = d.querySelector(".result__img");
const loaderBatman = d.querySelector(".loader");
const resultadotitulo = d.querySelector(".result__title");
const resultadotexto = d.querySelector(".result__text");
const botonencriptar = d.querySelector(".form__btn");
const botondesencriptar = d.querySelectorAll(".form__btn");
const botoncopiar = d.querySelector(".result__btn");



const llaves =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],

];
function encriptarmensaje(){}

//Funcion para encriptar
function encriptarmensaje(mensaje){
    let mensajeencriptado = "";
   for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
    for(let j = 0; j < llaves.length; j++){
        if (letra === llaves [j][0]) {
            encriptada = llaves[j][1]; 
            break;
        }
    }    
    mensajeencriptado += encriptada;    
   } 
   return mensajeencriptado
}

//Funcion para desencriptar
    function desencriptarmensaje(mensaje){
        let mensajedesencriptado = mensaje;
        for(let i = 0; i < llaves.length; i++){
            let regex = new RegExp(llaves[i][1], 'g');
            mensajedesencriptado = mensajedesencriptado.replace(regex, llaves[i][0]);
        }
        return mensajedesencriptado;
 }
//Ocultar elementos 
 textarea.addEventListener("input", (e)=>{
    imagenbusqueda.style.display = "none";
     loaderBatman.classList.remove("hidden");
     resultadotitulo.textContent = "Capturando Mensaje.";
     resultadotexto.textContent = "";
    
 })
//Funcion del boton encriptar
 botonencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeencriptado = encriptarmensaje(mensaje);
    resultadotexto.textContent = mensajeencriptado;
    botoncopiar.classList.remove("hidden");
    resultadotitulo.textContent = "El resultado es: ";

 })

botondesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajedesencriptado = desencriptarmensaje(mensaje);
    resultadotexto.textContent = mensajedesencriptado;
    resultadotitulo.textContent = "El resultado es: ";
    botoncopiar.classList.remove("hidden");
})

botoncopiar.addEventListener('click', ()=>{
    let textoCopiado = resultadotexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenbusqueda.style.display = "block";
        loaderBatman.classList.add("hidden");
        resultadotitulo.textContent = "Se copió el texto";
        botoncopiar.classList.add("hidden");
        resultadotexto.textContent = "";
    })

})