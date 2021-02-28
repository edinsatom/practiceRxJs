import { Observable, Observer, Subject } from 'rxjs'

/**
 * El observer es el que está atento a las emisiones del observable
 */
const observer: Observer<any> = {
    next: value => console.log('[next]', value),
    error: error => console.warn('[error]', error),
    complete: () => console.info('[complete]')
}

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( 
        () => subs.next( Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido!')
    }
    
});

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) )
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) )

/**
 * Características de un Subject
 * 1- Casteo múltiple -> Muchas subscripciones estarán sujetas al mismo observable
 * 2- Tambien es un observer
 * 3- Puede recibir next, error, complete
 */
const subject$ = new Subject();

const mySubs = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )


setInterval( () => {
    subject$.next(10);

    subject$.complete();
    
    mySubs.unsubscribe();

}, 3000)

