import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

/**
 * Combina los observables y solo emite valores cuando se ha producido el disparador del sample.
 */
interval$.pipe(
    sample(click$)
)
.subscribe( console.log )


