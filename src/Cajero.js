const Cliente=require('./Cliente.js')

class Cajero{
    //constructor
    constructor(){
        this.clientes=new Array()
        this.clienteActivo=null //por defecto no hay cliente activo, se crea cuando se identifica un cliente

    }

    //getter y setter
   

    //metodos
    autenticar(nombre,pin){
        let cliente=this.clientes.find(cli=>cli.nombre==nombre)
        if(cliente.pin==pin){
            this.clienteActivo=cliente
            return this.clienteActivo
        }
        else return null

    }
    ingresar(cantidad){
        this.clienteActivo.agregarMovimiento(cantidad)
    }
    disponer(){
        this.clienteActivo.agregarMovimiento(-cantidad)

    }
    verSaldo(){
        return this.clienteActivo.saldo
    }
    
}
//Crear el cajero
let cajero=new Cajero()


//le agregamos 3 clientes de prueba
let c1=new Cliente('Lucas',10)
let c2=new Cliente('Marta',10)
let c3=new Cliente('Sandra',10)

cajero.clientes.push(c1)
cajero.clientes.push(c2)
cajero.clientes.push(c3)

/* 
console.log(cajero) */

//Autenticamos al c1

cajero.autenticar(c1.nombre,c1.pin)

//ingresamos dinero
cajero.ingresar(20)
console.log(cajero.clienteActivo)


module.exports= Cajero

