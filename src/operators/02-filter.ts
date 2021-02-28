import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 10).pipe(
    filter( data => data % 2 === 1 )
)
// .subscribe( console.log )

interface Personaje {
    type: string;
    name: string;
}

const personajes: Personaje[] = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Wonder Woman'
    },
    {
        type: 'villan',
        name: 'Joker'
    }
]

from( personajes ).pipe(
    filter( data => data.type === 'hero')
)
// .subscribe( console.log );


fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( data => data.key ),
    filter( data => data === 'Enter')
)
.subscribe( console.log )
