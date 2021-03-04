import { fromEvent, interval } from "rxjs";
import { concatMap, take } from "rxjs/operators";


const click$ = fromEvent(document, 'click');
const interval$ = interval(500);


click$.pipe(
    concatMap( () => interval$.pipe(
        take(3)
    ) )
)
.subscribe(console.log)

