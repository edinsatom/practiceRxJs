import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";




const click$ = fromEvent<MouseEvent>(document, 'click')


click$.pipe(
    map( ({x}) => x ),
    tap( val => console.log('tap:', val)),
    auditTime(5000) // Espera 5 segs despues de un intervalo de emisiones y emite el último valor
)
.subscribe( console.log )




