import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";


const letras$ = of('E', 'D', 'I', 'N', 'S', 'O', 'N');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ) )
)
// .subscribe( {
//     next: val => console.log('val', val),
//     complete: () => console.log('Complete')
// } );


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval(1000);


mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    )),
    takeUntil( mouseup$ )
)
.subscribe( {
    next: val => console.log( val, 'Seg' ),
    complete: () => console.log('Complete')
} )

