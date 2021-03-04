import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1'

/* ajax.post( url, {
    id: 1,
    nombre: 'Fulanito'
}, {
    'mi-token': 'Abc123'
})
.subscribe(console.log) */

ajax({
    url,
    method: 'GET',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'Fulanito'
    }
})
.subscribe(console.log)