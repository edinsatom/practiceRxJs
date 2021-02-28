import { of, from, Observer } from 'rxjs';
import { formatDiagnostic } from 'typescript';


/**
 * of   -> Genera un observable tomando los argumentos y generando una secuencia
 * from -> Genera un observable a partir de un arreglo, promise, iterable, observable
 */

 const observer: Observer<any> = {
     next: val => console.log('next:', val),
     error: null,
     complete: () => console.log('Complete')
 }

// const src$ = from([1,2,3,4,5,6]);
// const src$ = from('Edinson & Jacke');

/* const src$ = from( fetch('https://api.github.com/users/edinsatom'))
console.log('Inicio');
//  src$.subscribe( observer )
src$.subscribe( async (resp) => {
    // console.log(resp)
    const dataResp = await resp.json();
    console.log(dataResp)
})
 console.log('Fin') */

 const miGenerador = function*( ) {
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }

 const miIterable = miGenerador();

 from(miIterable).subscribe( observer )
