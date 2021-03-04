import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";



/**
 * startWith inicializa la emisión de datos del observalbe
 * con el/los valor indicado.
 * endWith finaliza la emisión de datos del observable con
 * el/los valores indicados
 */
const numbers$ = of(1,2,3,4,5,6).pipe(
    startWith('inicio'),
    endWith('aqui','es','el','fin')
)

numbers$.pipe(

)
.subscribe(console.log)
