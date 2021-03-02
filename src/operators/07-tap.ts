import { of } from "rxjs/internal/observable/of";
import { take, tap } from "rxjs/operators";


const numeros$ = of(1,2,3,4,5,6).pipe(
    tap( console.log )
)

numeros$.pipe(
    tap( t => console.log('tap', t) ),
    take(2)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})


