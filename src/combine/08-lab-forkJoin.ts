import { forkJoin, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'edinsatom'

forkJoin({
    user: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ).pipe(
        catchError( err => of({}))
    ),
    repos: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/reposaf`
    ).pipe(
        catchError( err => of({}))
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    ).pipe(
        catchError( err => of({}))
    )
}).pipe(
    catchError( (err: AjaxError) => of(err))
)
.subscribe( console.log )