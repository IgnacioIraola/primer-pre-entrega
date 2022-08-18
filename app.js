class Producto{
    constructor(bebida,precio){
        this.bebida = bebida;
        this.precio = Number(precio);
    }
}

let compra=[]

for (let i = 0; i <=2; i++) {
    let bebida = prompt ("Ingrese la bebida deseada: ")
    let precio = prompt ("Ingrese el valor de la bebida: ")

    let producto = new Producto(bebida,precio)
    compra.push(producto)
}

const precioBebida = compra.map(dato => dato.precio)

let precioTotal = precioBebida.reduce((a,b) =>a+b)
alert("El total de la compra es: " + precioTotal)
