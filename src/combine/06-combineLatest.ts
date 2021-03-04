import { combineLatest, fromEvent } from "rxjs";
import { debounceTime, pluck } from "rxjs/operators";


const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');


combineLatest([
    click$.pipe(pluck('type')),
    keyup$.pipe(pluck('key'))
])
// .subscribe( console.log )

const input1 = document.createElement('input')
const input2 = document.createElement('input')


input1.placeholder = 'email@correo.com'
input2.placeholder = '****************'
input2.type = 'password'

document.querySelector('body').append(input1, input2)

const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup').pipe(
        pluck<KeyboardEvent,string>('target', 'value')
)

combineLatest([
    getInputStream( input1 ),
    getInputStream( input2 ).pipe( debounceTime(500) )
])
.subscribe( console.log )


