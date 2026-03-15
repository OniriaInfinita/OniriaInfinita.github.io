//variables
let botonAnyadir=document.getElementById("botonAnyadir")
let panel=document.getElementById("panel")
let nombre=document.getElementById("nombre")
let solucion=document.getElementById("solucion")
let botonResuelve=document.getElementById("botonResuelve")

let amigos=[]
let solucionClientes = new Map()



// //funciones
// function render(){
//     console.log("AMIGOS: "+amigos)
//     //console.log("CLIENTES: "+clientes)
//     panel.innerHTML=""
//     amigos.forEach((amigo)=>{
//         console.log(amigo)
//         panel.innerHTML+=`<input type='button' value='Borrar' data-id='${amigo}'>`+amigo+"<BR>"
//     })
// }

//funciones
function render(){
    console.log("AMIGOS: "+amigos)
    const elementos = document.createElement('ul')
    panel.innerHTML=""
    amigos.forEach((amigo)=>{
        console.log(amigo)
        let amigoLi = document.createElement('li')
        let button = document.createElement('input')
        let textoLi = document.createElement('span')
        button.type='button'
        button.dataset.id=amigo
        button.value='Borrar'
        button.style.marginLeft = "10px"
        textoLi.innerHTML=amigo
        amigoLi.append(textoLi)
        amigoLi.append(button)
        elementos.append(amigoLi)
    })
    panel.append(elementos)
}

//funciones
function renderSolucion(){
   console.log("SOLUCION: " + solucionClientes)
    const elementos = document.createElement('ul')
    solucion.innerHTML = ""
    solucionClientes.forEach((value, key) => {
        let itemLi = document.createElement('li')
        let textoLi = document.createElement('span')
        textoLi.innerHTML = `${key} regala a ....... ${value}`
        itemLi.append(textoLi)
        elementos.append(itemLi)
    })
    solucion.append(elementos)
}

function borraAmigo(nombre){
    let indice=amigos.indexOf(nombre)
    amigos.splice(indice,1)
    render()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
    devuelve false si el último se asigna a si mismo
*/
function reparto(){
    let quien=amigos.slice()
    solucionClientes = new Map()
    let esCorrecto=true
    //TO DO: COMPLETA EL ALGORITMO PARA QUE FUNCIONE

    amigos.forEach((amigo) => {
    let indice = aleatorio(0, quien.length - 1)
    let asignado = quien[indice]
    
    solucionClientes.set(amigo, asignado)
    quien.splice(indice, 1)   // lo elimina de quien para no repetir
    
    if(amigo === asignado){
        esCorrecto = false
    }
})


    return esCorrecto    
}

//eventos
botonAnyadir.addEventListener("click",(e) => {
    //capturar el formulario
    e.preventDefault()
    amigos.push(nombre.value)
    render()
})


panel.addEventListener("click", (e)=>{
    let nombre=e.target.dataset.id
    console.log("Quieres borrar: "+ nombre)
    borraAmigo(nombre)
})

botonResuelve.addEventListener("click", (e)=>{
    console.log("Voy a resolver ")
    let correcto=reparto()
     let intentos = 1
    while (!correcto){
        if (!correcto)
            console.log("El mapa no acabo correctamente.")
        correcto=reparto() 
        intentos++
    }
     console.log("Reparto correcto en " + intentos + " intento/s")// asi sé cuando funciona el algoritmo y cuántas veces ha tenido que intentarlo para conseguirlo
    // c --> c
    renderSolucion()
})


































































