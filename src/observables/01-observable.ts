import { Observable, Observer } from 'rxjs'

/**
 * El observer es el que está atento a las emisiones del observable
 */
const observer: Observer<string> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('complete [obs]')
}

/**
 * Genera los valores
 */
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Edinson');

    // Estos valores fuerzan un error en el observable
    // const a = undefined;
    // a.nombre = 'Laura';

    subs.complete();    // Finaliza la subscripción

    // Estos valores no se emiten por estar después del subs.complete()
    subs.next('no');
    subs.next('emitidos');

    
});


/**
 * Formas de llamar visualizar los valores emitidos por el observable
 */

// Solo recibe los valores next
obs$.subscribe( console.log )

// Procesa todos los valores de menara independiente.
/* obs$.subscribe(
    valor => console.log('next:', valor),
    error => console.warn('error:', error),
    () => console.info('completado')
) */

// Procesa los valores a través del observer
// obs$.subscribe( observer );









