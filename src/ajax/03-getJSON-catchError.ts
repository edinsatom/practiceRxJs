import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";


const url = 'https://httpbfasdfin.org/delay/1';

const errorHandler = (resp: AjaxError) => {
    console.warn('Error:', resp.message);
    return of({
        ok: false,
        users: []
    })
}

/* const obs$ = ajax.getJSON( url ).pipe(
    catchError( errorHandler )
);
const obs2$ = ajax( url ).pipe(
    catchError( errorHandler )
); */

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

obs$
.subscribe({
    next: val => console.log('val', val),
    error: err => console.warn('err', err),
    complete: () => console.log('Complete')
});
obs2$
.subscribe( data => console.log('data', data));




