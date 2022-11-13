import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{
    
    static cantidadCuentas = 0; //static: atributo común a todas las instancias de la clase, se accede como atributo de la clase y no de la instancia (objeto)

    constructor(cliente, numero, agencia){        
        super(cliente, numero, agencia,0);        
        CuentaCorriente.cantidadCuentas++;   
    }

    retirarDeCuenta(valor){        
        super._retirarDeCuenta(valor,5);      
    }
}