import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    tap<MouseEvent>( console.log ),
    first<MouseEvent>( e => e.clientX >= 140),
    map( ( { clientX, clientY } ) => ({ clientX, clientY }) )
)
.subscribe( {
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
} )


