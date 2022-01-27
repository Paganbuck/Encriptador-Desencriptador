function encriptar(elemento){
    let palabra = document.getElementsByTagName("input")[0].value;
    let mensajeCodificado = btoa(palabra);
    
    document.getElementById("texto").value = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[1].value = mensajeCodificado;
    
}
function desencriptar(elemento){
    let palabra = document.getElementsByTagName("input")[1].value;
    let mensajeDeCodificado = atob(palabra);
    
    document.getElementById("texto").value = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[1].value = mensajeDeCodificado;
}

let boton = document.getElementById('copiador');
boton.addEventListener('click', copiarEncriptado, false);

function copiarEncriptado(){
    let texto = document.getElementById('texto');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy')

    alert('Ya se ha copiado');
}