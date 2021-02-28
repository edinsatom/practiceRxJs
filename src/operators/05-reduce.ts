import { interval } from "rxjs";
import { reduce, take } from "rxjs/operators";


const numbers = [1,2,3,4,5,6];

const totalReducer = ( acc: number, act: number) => {
    return acc + act;
}

const total = numbers.reduce( totalReducer, 9);
console.log( 'total arr', total )

 
interval(1000).pipe(
    take(6),
    reduce( totalReducer )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})