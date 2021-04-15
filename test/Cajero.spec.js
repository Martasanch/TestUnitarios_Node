const { TestScheduler } = require('@jest/core')
const Cajero=require('../src/Cajero')
const Cliente=require('../src/Cliente')

describe("Bateria de test aplicacion cajero automático",()=>{


    //Antes de empezar cada test lleno el array con 10 clientes nuevos
    let cajero=new Cajero()
    beforeEach(()=>{
        cajero.clientes=[]
        for (let i = 0; i < 100; i++) {
            let nombre= "Cli"+i
            let saldo=(Math.random()*1000).toFixed(2)
            let c = new Cliente(nombre, saldo)  
            cajero.clientes.push(c)
        }
    })
    //despues de cada test quito al cliente activo
    afterEach(()=>{
        cajero.clienteActivo=null
    })

    test("Comprobar que el cajero autentica clientes", ()=>{
        for (let i = 0; i < 100; i++) {
            let cliente=cajero.clientes[i]
            expect(cajero.autenticar(cliente.nombre, cliente.pin)).toBe(cliente)
        }
    })

    test("Comprobar que el cajero hace ingresos", ()=>{
        //cantidad aleatoria
        let cantidad=parseFloat((Math.random()*1000).toFixed(2))
        //Te autenticas con un usuario, por ejemplo el cliente 0
        cajero.autenticar(cajero.clientes[0].nombre,cajero.clientes[0].pin)
        let saldoAnterior=cajero.verSaldo()
        //ingresar la cantidad
        cajero.ingresar(cantidad)
        //compruebo que se ha incrementadao el saldo en esa cantidad
        let saldoPosterior=saldoAnterior+cantidad
     
    })



})