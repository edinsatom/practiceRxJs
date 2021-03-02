import { fromEvent } from "rxjs";
import { distinctUntilChanged, map, sampleTime } from "rxjs/operators";




const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    sampleTime(1000),              // Ubicar el sampleTime arriba es más eficiente para controlar las cantidad de eventos que se generan
    map( ({x, y}) => ({ x, y })),
    distinctUntilChanged( (ant, act) => ant.x === act.x && ant.y === act.y )
)
.subscribe( console.log )



