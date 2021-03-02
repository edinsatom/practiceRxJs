import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Users {
    name: string;
}

const users:Users[] = [
    {
        name: 'Gregorio'
    },
    {
        name: 'Gregorio'
    },
    {
        name: 'Rubiela'
    },
    {
        name: 'Rubiela'
    },
    {
        name: 'Jackeline'
    },
    {
        name: 'Jackeline'
    },
    {
        name: 'Rodrigo'
    },
    {
        name: 'Gregorio'
    },
]

from( users ).pipe(
    // distinctUntilChanged( (anterior, actual) => anterior.name === actual.name )
    distinctUntilKeyChanged( 'name' ) /// Funciona igual que el caso anterior
)
.subscribe( console.log )


