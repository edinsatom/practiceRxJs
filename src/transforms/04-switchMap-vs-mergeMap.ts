import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";



const mousedown$ = fromEvent(document, 'mousedown');
const interval$ = interval(500);

/**
 * La principal diferencia entre switchMap y MergeMap
 * es que switchMap cancela la subscripcion anterior antes de 
 * generar la nueva por lo que solo quedará una subscripción activa
 * a diferencia de mergeMap que no cancela la subscripción anterior
 * y en consecuencia va acumulando subscripciones.
 */

mousedown$.pipe(
    switchMap( () => interval$ )
    // mergeMap( () => interval$ )
)
.subscribe( console.log )
