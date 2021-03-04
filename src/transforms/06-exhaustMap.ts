import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";


const click$ = fromEvent(document, 'click');
const interval$ = interval(500);

/**
 * El exhaustMap conserva la subscripción actual hasta completarla
 * en caso de intentar generar nuevas subscripciones, las ignora y
 * solo genera una subscripción nueva cuando no tiene una subscripción activa.
 */

click$.pipe(
    exhaustMap( () => interval$.pipe(
        take(3)
    ) )
)
.subscribe(console.log)

