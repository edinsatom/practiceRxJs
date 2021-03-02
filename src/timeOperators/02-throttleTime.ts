import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, pluck } from "rxjs/operators";


const click$ = fromEvent( document, 'click')

/**
 * Emite el evento pasados tres segundos de la última emisión
 */
click$.pipe(
    throttleTime(3000)
)
// .subscribe( console.log )


const input = document.createElement('input');
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>( input, 'keyup')

input$.pipe(
    // throttleTime(1000), /// Emite los valores cada segundo
    throttleTime(400, asyncScheduler, {
        leading: false, // Determina si se emite o no el valor al inicio del intervalo de tiempo
        trailing: true, // Determina si se emite o no el valor al final del intervalo de tiempo
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( console.log );

