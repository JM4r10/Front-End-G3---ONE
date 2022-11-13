import { Cliente } from "../Cliente.js";
export class Cuenta {
    #cliente;
    #saldo;

    set cliente(valor){
        if(valor instanceof Cliente){
            this.#cliente=valor;
        }            
    }

    get cliente(){
        return this.#cliente;
    }   

    constructor (cliente, numero, agencia, saldo){
        if (this.constructor == Cuenta){
            throw new Error('No se debe instanciar objetos de la clase Cuenta')
        }
        
        this.#cliente = cliente;  
        this.numero = numero;
        this.agencia = agencia;              
        this.#saldo = saldo;
    }   
    
    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldo += valor 
        return this.#saldo;                
    }

    retirarDeCuenta(valor){
        //método abstracto (esqueleto que no hace nada y con el error obliga a implementar en la clase hijo)
        throw new Error('Debe implementar el metodo retirarDeCuenta en su clase');
        
        // this._retirarDeCuenta(valor,0);
    }

    _retirarDeCuenta(valor, comision){
        valor = valor *(1+comision/100);        
        if(valor <= this.#saldo)
            this.#saldo -= valor; 
        return this.#saldo;        
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

    prueba(){
        console.log('Metodo padre')
    }
}