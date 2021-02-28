import { interval, Observer, timer } from 'rxjs';


const observer: Observer<number> = {
    next: val => console.log('next:', val),
    error: null,
    complete: () => console.log('Complete'),
}

// Son operadores asincronos por defecto

/**
 * - Genera valores cada intervalo de tiempo indicado sin deternerse
 */
const interval$ = interval(1000);

/**
 * - Genera un valor en el tiempo indicado y se completa
 * - Genera valores a partir de un intervalo de tiempo sin completarse
 * - Se puede programar para ejecutar en un momento específico
 */
// const timer$    = timer(2000);
// const timer$    = timer(2000, 1000);

const ahoraEn5Segs = new Date();
ahoraEn5Segs.setSeconds( ahoraEn5Segs.getSeconds() + 5);
const timer$       = timer(ahoraEn5Segs);

console.log('inicio')
// interval$.subscribe( observer )
timer$.subscribe(observer);
console.log('fin')



