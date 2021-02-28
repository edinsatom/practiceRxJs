import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const numeros$ = range(1, 10);


numeros$.pipe(
    tap( x => console.log('antes', x)),
    map( val => (val * 10).toString() ),
    tap( {
        next: val => console.log('despues', val),
        complete: () => console.log('Se terminó todo.')
    })
)
.subscribe( val => console.log('subs', val))

