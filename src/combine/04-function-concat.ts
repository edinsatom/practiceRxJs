import { concat, of } from "rxjs";
import { take } from "rxjs/operators";
import { interval } from "rxjs/internal/observable/interval";



const interval$ = interval(1000)


concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(3) ),
    [1,2,3,4,5],
    of('fin')
).subscribe( console.log )



