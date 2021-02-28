import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";



const div = document.createElement('div');
div.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper augue eget lacus venenatis, mollis scelerisque libero tincidunt. Vestibulum suscipit neque id dui dictum egestas in eget elit. Duis et justo finibus, interdum purus in, sagittis est. Proin tempus tellus felis, vitae iaculis dui facilisis aliquet. Donec in lobortis est. Sed vel mauris dui. Maecenas eget fermentum ligula. Suspendisse in dictum magna, vel congue odio. Mauris ornare tellus sit amet purus interdum dictum. Maecenas sit amet pulvinar neque. Sed sapien nisi, tincidunt ut lacus et, suscipit scelerisque lorem.
<br><br>
Sed congue ligula felis, ut porta enim sagittis ac. Vestibulum dolor libero, condimentum eget lacinia a, pulvinar quis risus. Cras lobortis odio nisl, vel laoreet massa lobortis vitae. Ut sollicitudin nibh sit amet dignissim euismod. Sed gravida scelerisque cursus. Fusce et imperdiet est. Nunc venenatis sit amet lorem vitae accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed tincidunt risus. In hendrerit accumsan ex, consequat convallis augue ullamcorper vel. In sollicitudin fermentum imperdiet. Maecenas arcu odio, venenatis quis finibus eleifend, vulputate at nulla. Sed ac massa felis.
<br><br>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc semper nunc nisl, maximus malesuada enim pretium id. Vivamus et sodales tortor. Quisque quis hendrerit ante, ut volutpat nisi. Sed efficitur ultricies lacus ultrices aliquam. Nullam tempor purus vitae euismod laoreet. Nullam mauris justo, malesuada sed nulla quis, molestie placerat nulla. Nam arcu quam, sollicitudin eu enim viverra, laoreet iaculis sem.
<br><br>
Cras lacinia lobortis posuere. Aenean fringilla ut nisl eget aliquet. In hac habitasse platea dictumst. Mauris cursus sem quis urna scelerisque gravida. In magna erat, ultrices quis ante quis, elementum eleifend ligula. Donec nulla augue, vestibulum in felis vel, pellentesque ultricies justo. Sed id vestibulum libero, quis eleifend elit. Ut ac accumsan tortor. Phasellus sollicitudin magna in efficitur convallis. Fusce sagittis orci nulla. Curabitur condimentum lorem ut tellus elementum aliquam. Nunc ut pulvinar nisl.
<br><br>
Nulla ultricies commodo accumsan. Sed semper vitae ante et commodo. Cras porta laoreet dolor. Aliquam a diam aliquam, egestas felis auctor, interdum velit. Phasellus id vestibulum ligula. Donec non tincidunt libero. Pellentesque venenatis luctus arcu, et tincidunt lacus varius sit amet. Nullam sodales laoreet sollicitudin. Vestibulum interdum ultricies nibh, ut efficitur ligula rhoncus id. Proin at fringilla eros. 
`
const body = document.querySelector('body');
body.append(div)


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// Funcion que haga el cálculo
const calcularPorcentajeScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

// streams

const scroll$ = fromEvent<Event>( document, 'scroll' );
// scroll$.subscribe( console.log )

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( percent => {
    progressBar.style.width = `${ percent}%`;
})
