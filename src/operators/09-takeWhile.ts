import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    takeWhile( ({x, y }) => x > 200 && y < 200),
    map( ({x, y }) => console.log( { x, y}) )
)
.subscribe( {
    next: val => console.log('next', val),
    complete: () => console.log('Complete!')
});


