import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, filter, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs/operators";
import { GibHubUser, GitHubUsersResp } from "../interfaces/models/githubUser.model";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers

const listUsers = (users: GibHubUser[]) => {

    console.table(users);
    orderList.innerHTML = '';

    for (const user of users) {
        const li     = document.createElement('li')
        const img    = document.createElement('img')
        const anchor = document.createElement('a')

        img.src = user.avatar_url;
        anchor.href = user.html_url;
        anchor.text = 'Ver sitio'
        anchor.target = '_blank'

        li.append( img )
        li.append( ` -> ${user.login} ` )
        li.append( anchor )

        orderList.append( li )
    }


}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    filter(data => data != ''),
    mergeMap<string, Observable<GitHubUsersResp>>(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${text}`
    )),
    pluck<GitHubUsersResp, GibHubUser[]>('items')
)
.subscribe( listUsers )

const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    pluck('target', 'value'),
    switchMap( text => ajax.getJSON(`${url}${text}`))
)
// .subscribe( console.log )

