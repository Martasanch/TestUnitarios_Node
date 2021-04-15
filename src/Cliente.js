class Cliente{

    //constructor
    constructor(nombre,saldo=0.0){ //le doy el valor 0 por defecto al saldo, si quiero cambairlo le paso un parámetro (opcional)
        this.nombre=nombre
        this.pin=this.generarPin("1000", "9999")
        this.saldo=0
        this.movimientos= new Map()
        this.agregarMovimiento(saldo)

    }


    //getter y setter
   

    //metodos
    generarPin(min, max){
        return Math.floor((Math.random() * (max - min + 1)) + min);
        
    }
    agregarMovimiento(cantidad){
        this.movimientos.set(new Date().getTime(), cantidad)
        this.saldo+=cantidad
    }

      
}


/* let nuevoCliente=new Cliente('Pepe',5.50)
console.log("Cliente Creado")
setTimeout(()=>{
    console.log('Un dia más tarde, ingresa 20euros')
    nuevoCliente.agregarMovimiento(20)
    console.log(nuevoCliente)

},3000) */


/* let nuevoCliente2=new Cliente('Juan')
console.log(nuevoCliente2) */


module.exports= Cliente
