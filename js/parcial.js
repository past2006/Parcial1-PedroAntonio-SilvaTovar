function cambiarTexto() {

    document.getElementByID("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!";

    

}

function modoOscuro() {

    if(backgroundColor = "black"){
       document.body.style.color = "white"; 
    }else{}
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

let carrito = 0

function agregarCarrito() {

    carrito++
    alert("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value
    let apelllido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let genero = document.getElementById("genero").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value



    alert("Nombre= "+nombre+"apellido="+apelllido+"Edad= "+edad+"Generpo="+genero+"Direccion= "+direccion+"telefono="+telefono+"Correo= "+correo )
}
