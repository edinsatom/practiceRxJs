import { Observable, Observer } from 'rxjs'

/**
 * El observer es el que está atento a las emisiones del observable
 */
const observer: Observer<any> = {
    next: value => console.log('[next]', value),
    error: error => console.warn('[error]', error),
    complete: () => console.info('[complete]')
}

const intervalo$ = new Observable<number>( subs => {
    let num = 0;
    const interval = setInterval( () => {
        subs.next( num )
        num++;

        console.log(num)

    }, 1000)

    // El complete no es lo mismo que el unsubscribe.
    setTimeout(() => {
        subs.complete()
    }, 2500);

    // Los observable tienen un método return que se ejecuta cuando se invoca el unsubscribe.
    return () => {
        clearInterval(interval);
        console.log('Intervalo destuido.')
    }
});

/**
 * Cada subscripción se maneja de manera independiente, lo que puede generar fugas de memoria.
 */
const subs0 = intervalo$.subscribe( observer );
const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );

// Al encadenar las subscripciones solo se requiere un solo unsubscribe
subs0.add( subs1 )
     .add( subs2 )

setTimeout(() => {
    subs0.unsubscribe();
    subs1.unsubscribe(); // No se ejecuta al encadenar las subscripciones
    subs2.unsubscribe(); // No se ejecuta al encadenar las subscripciones

    console.log('Completado el timeout')
}, 5000);