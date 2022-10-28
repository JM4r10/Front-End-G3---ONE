const ciudades = new Array('Bogota','Lima','Santiago','Montevideo');
console.log(ciudades);

const paises = ["Colombia", "Peru", "Chile", "Brasil","Argentina","Uruguay","Venezuela"];
// console.log(paises);

console.log(`${paises.length}`)


ciudades.shift();
console.log(ciudades);

ciudades.pop();
console.log(ciudades);

const paisesFiltrados = paises.filter((e)=>e=="Brasil");
console.log(paisesFiltrados);

console.log(paises.join('-'));

console.log(paises.sort());
console.log(`Perú esta en la posicion: ${paises.indexOf('Peru')}`); 

const listaPaisesyCiudades = paises.concat(ciudades); //no modifica el array
console.log(listaPaisesyCiudades);