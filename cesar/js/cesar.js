
//CIFRADO CESAR

let abecedario = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789"
let botonCifra = document.getElementById("botonCifra")
let resultado = document.getElementById("resultado")

botonCifra.addEventListener("click", () => {
    let frase = document.getElementById("frase").value
    let paso = parseInt(document.getElementById("paso").value)
    let fraseCifrada = ""

for (let i=0;i<frase.length;i++){
    let letra=frase[i]
    //uso el truco de la resta de una divison para que si me salgo del array vuelva a empezar
    let posicion= (abecedario.indexOf(letra)%abecedario.length)
    let nuevaLetra=abecedario[posicion+paso]
    //si es un espacio no lo cifro
    if (letra!==" ")
        fraseCifrada+=nuevaLetra
    else 
        fraseCifrada+=" "
}

resultado.innerHTML = fraseCifrada

})


