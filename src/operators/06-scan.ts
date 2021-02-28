import { from, interval } from "rxjs";
import { reduce, scan, take } from "rxjs/operators";

/**
 * Reducer en JavaScript
 * @param acc acumulador
 * @param act valor actual
 */
const totalReducer = (acc, act) => acc + act;


const numbers = [1,2,3,4,5,6];

// Reduce
from(numbers).pipe(
    reduce( totalReducer, 0)
)
// .subscribe( console.log )

// Scan
from(numbers).pipe(
    scan( totalReducer, 0)
)
.subscribe( console.log )
