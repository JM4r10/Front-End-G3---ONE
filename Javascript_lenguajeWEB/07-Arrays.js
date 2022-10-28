const ciudades = new Array('Bogota','Lima','Santiago');
// console.log(ciudades);

const paises = ["Colombia", "Peru", "Chile", "Brasil","Argentina"];
// console.log(paises);

paises.push("Uruguay");
ciudades.push('Montevideo');

// console.log(ciudades);
// console.log(paises);

paises.unshift("Ecuador");
ciudades.unshift('Quito');

console.log(ciudades);
console.log(paises);

paises.splice(1,2,"Venezuela","Paraguay");
console.log(paises);