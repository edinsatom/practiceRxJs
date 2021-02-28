import { of } from 'rxjs'


/**
 * Es una funcion que permite generar un observable en base a un listado de elementos
 * y los emite de manera secuencial y síncrona y al emitir el último valor se completa 
 * el observable.
 */
const obs$ = of<number>(1,2,3,4,5,6);
// const obs$ = of<Array<number>>([1,2,3,4,5,6]);
// const obs$ = of<any>([1,2,3,4,5,6], { data: ['hola', 'mundo']}, 'Jackecita');


console.log('Inicio del Obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Termina la secuencia')
);
console.log('fin del Obs$');


