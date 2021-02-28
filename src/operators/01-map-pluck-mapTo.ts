import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


/* range(1,5).pipe(
    map<number, string>( val => (val * 10).toString())
)
.subscribe(console.log) */

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map<KeyboardEvent, string>( e => e.code )
);

const keyUpPluck$ = keyUp$.pipe(
    pluck<KeyboardEvent, string>('keyCode')
);

const keyUpMapTo$ = keyUp$.pipe(
    mapTo<KeyboardEvent, string>( 'Tecla pulsada')
);

keyUp$.subscribe( console.log )
keyUpCode$.subscribe( data => console.log('map', data ))
keyUpPluck$.subscribe( data => console.log( 'pluck', data))
keyUpMapTo$.subscribe( data => console.log( 'mapTo', data))

