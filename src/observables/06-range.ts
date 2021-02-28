import { of, range, asyncScheduler } from 'rxjs';

// Generando una sencuencia de valores con el operador of
// const src$ = of(1,2,3,4,5);

// Generando una secuencia de valores con el operador range
// const src$ = range(5, 8);

// Se puede convertir en asincrono con el parámetro asyncScheduler
const src$ = range(5, 8, asyncScheduler);

console.log('inicio')
src$.subscribe( console.log )
console.log('Fin...')
