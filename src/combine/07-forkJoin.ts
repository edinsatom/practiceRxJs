import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";


const numbers$ = of(1,2,3,4,5)
const interval$= interval(1000).pipe( take(3));
const letters$ = of('a','b','c').pipe( delay(3500));


forkJoin({
    num: numbers$,
    int: interval$,
    let: letters$
})
.subscribe( console.log )

// .subscribe( resp => {
//     console.log('nums', resp[0])
//     console.log('int', resp[1])
//     console.log('letters', resp[2])
// })



