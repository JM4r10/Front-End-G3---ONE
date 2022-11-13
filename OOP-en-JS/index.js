import {Cliente} from "./Cliente.js"
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const empleado = new Empleado('Juan Perez', '1234334', 10000)
empleado.asignarClave('12345')
console.log(SistemaAutenticacion.login(empleado,'12345'));

const cliente = new Cliente('Leonardo', '13804050', '123224');
cliente.asignarClave('1111')
console.log(SistemaAutenticacion.login(cliente,'1111'));
// const cliente2 = new Cliente('Maria', '16979808', '8989');

const gerente = new Gerente('Pedro Rivas', '232344',12000)
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente,'655'));
// const director = new Director('Elena Moreno','232323',15000)

// console.log(empleado, gerente, director);

// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());
