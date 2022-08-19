
const llave = 
{
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}
const botonEnc = document.getElementById('enc')
const botonDes = document.getElementById('des')
const botonCopy = document.getElementById("copy")



function validacionEnc() {

    const input = document.getElementById('input')
    const result = document.getElementById('result')
    
    if(input.value != "") {
        const info = document.getElementById('info') //imagen y texto
        const resultado = document.getElementById('resultado') //contenedor del textArea
        const copy = document.getElementById('copy') //Boton copy
        
        if(info.hidden === false) {
            info.hidden = true
            resultado.style = "display: flex;";
            result.hidden = false
            copy.hidden = false
        }

        result.textContent = cifrar(input.value)
    }


}

function validacionDes() {
    const input = document.getElementById('input')
    const result = document.getElementById('result')

    if(input.value != "") {
        const info = document.getElementById('info') //imagen y texto
        const resultado = document.getElementById('resultado') //contenedor del textArea
        const copy = document.getElementById('copy') //Boton copy
        
        if(info.hidden === false) {
            info.hidden = true
            resultado.style = "display: flex;";
            result.hidden = false
            copy.hidden = false
        }

        result.textContent = descifrar(input.value)
    }
}


function copiar() {

    let text = document.createElement("textarea")
    const result = document.getElementById('result')

    document.getElementsByTagName("body")[0].appendChild(text)

    text.textContent = result.textContent
    text.select()

    document.execCommand("copy")

    document.getElementsByTagName("body")[0].removeChild(text)
}




/*  
* Recorre el mensaje para sustituir las letras con su correspondiente llave.
* Retorna el mensaje cifrado.
*/
function cifrar(mensaje) {

    let contador = 0
    let mensaje_cifrado = ""

    while(true) {

        Object.keys(llave).includes(mensaje[contador])
        ?mensaje_cifrado += llave[mensaje[contador]]
        :mensaje_cifrado += mensaje[contador]

        ++contador
        if(contador > mensaje.length - 1) break
    }

    return mensaje_cifrado
}

/*
* Obtiene las palabras con las que se cifro el mensaje.
* Obtiene las letras originales que se cifraron.
* Remplaza las palabras que coincidan en el mensaje con las letras originales.
* Retorna el mensaje descifrado.
*/
function descifrar(mensaje) {

    let mensaje_descifrado = mensaje
    let llaves = Object.values(llave)
    let sustituir = Object.keys(llave)

    for(let i = 0;i < llaves.length;i++) mensaje_descifrado = mensaje_descifrado.replaceAll(llaves[i], sustituir[i])

    return mensaje_descifrado
}


botonEnc.onclick = validacionEnc
botonDes.onclick = validacionDes
botonCopy.onclick = copiar