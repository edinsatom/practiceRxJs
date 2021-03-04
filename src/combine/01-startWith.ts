import { of } from "rxjs";
import { startWith } from "rxjs/operators";



/**
 * startWith inicializa la emisión de datos del observalbe
 * con el valor indicado.
 */
const numbers$ = of(1,2,3,4,5,6).pipe(
    startWith(0)
)

numbers$.pipe(

)
.subscribe(console.log)
