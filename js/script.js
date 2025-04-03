
const carrito = document.querySelector("#carrito") ;


function Airpods(){
    const nuevoProducto= document.createElement("li");
    nuevoProducto.textContent= "Airpods";
    carrito.appendChild(nuevoProducto);
}

function vaciar(){
    carrito.innerHTML="";
}

function smartwatch(){
    const nuevoProducto= document.createElement("li");
    nuevoProducto.textContent= "Smartwatch";
    carrito.appendChild(nuevoProducto);
}


function aire() {
    const nuevoProducto= document.createElement("li");
    nuevoProducto.textContent= "Aire acondionado";
    carrito.appendChild(nuevoProducto);
}


function Mouse(){
    const nuevoProducto= document.createElement("li");
    nuevoProducto.textContent= "TV Smart";
    carrito.appendChild(nuevoProducto);
}





