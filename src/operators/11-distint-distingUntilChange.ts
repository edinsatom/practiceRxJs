import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";


const numbers$ = of<number|string>(1,1,'1',1,1,2,2,3,3,4,2,1,'1',6)


numbers$.pipe(
    // distinct() /// Usa el operador de equidad ===
    distinctUntilChanged() /// Usa el operador equidad pero solo compara solo con el valor inmediatamente anterior
)
// .subscribe( console.log )

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
    // distinct( user => user.name )
    distinctUntilChanged( (anterior, actual) => anterior.name === actual.name )
)
.subscribe( console.log )


