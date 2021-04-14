class Cliente{
    //constructor
    constructor(nombre,saldo=0.0){ //le doy el valor 0 por defecto al saldo, si quiero cambairlo le paso un parámetro (opcional)
        this.nombre=nombre
        this.pin=this.generarPin("0001", "9999")
        this.saldo=saldo
        this.movimientos= new Map()
        this.movimientos.set(new Date().getTime(), saldo)


    }


    //getter y setter
   

    //metodos
    generarPin(min, max){
        return Math.floor((Math.random() * (max - min + 1)) + min);
        
    }
}



let nuevoCliente=new Cliente('Pepe',5.50)
console.log(nuevoCliente)
let nuevoCliente2=new Cliente('Juan')
console.log(nuevoCliente2)