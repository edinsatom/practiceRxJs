import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';


const url = 'https://api.github.com/ussssers?per_page=5'

/* const errorHandle = ( resp: Response ): Response => {
    if( !resp.ok ){
        throw new Error( resp.statusText )
    }

    return resp;
} */

// const fetchPromise = fetch( url );

/**
 * El catch no llega a ajecutarse porque si hay una respuesta aunque la respuesta
 * sea de que hubo algún error.
 */
/* fetchPromise
    .then( resp => resp.json() )
    .then( console.log )
    .catch( err => console.warn('Error en el endpoint', err ) ) */


/* fetchPromise
    .then( errorHandle )
    .then( resp => resp.json() )
    .then( console.log )
    .catch( err => console.warn('Error en el endpoint', err ) )
 */

const errorHandle = (err: AjaxError) => {
    console.warn('Error en la petición', err);
    return of({})
}

ajax(url).pipe(
    map(resp => resp.response),
    catchError(errorHandle)
)
.subscribe(console.log)
