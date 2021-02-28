import { asyncScheduler } from 'rxjs';

/**
 * Permite generar las funcionaliades de setTimeout o setInterval
 */

//#region  Como setTimeout
/**
 * Se envia la funcion que puede ser una función de flecha como parametro
 * del asyncScheduler
 */
const sayHello = () => console.log('Hello world!');
asyncScheduler.schedule( sayHello, 2000 );

const sayHelloWithOneParam = ( {name} ) => console.log('Hello', name);
asyncScheduler.schedule( sayHelloWithOneParam, 3000, { name: 'Edinson'})

// Si requiero parametros en la función
const sayHelloWithParamOb = ( {name , more} ) => console.log(`${name} & ${more}`);
asyncScheduler.schedule( sayHelloWithParamOb, 1000, { name:'Edinson', more: 'Jackeline'} );

// #endregion

//#region Como setInterval
/**
 * No se puede usar una función de felcha para usar asyncScheduler como un
 * setInterval
 */

 const subs = asyncScheduler.schedule( function(state) {
     console.log('state', state);

     this.schedule( state + 1, 1000)
 }, 4000, 0);

 // Para finalizarlo se puede usar un setTimeout

//  setTimeout(() => {
//      subs.unsubscribe();
//      console.log('Subscripción finalizada!')
//  }, 8000);

 // Tmaiben se puede finalizar con un scheduler usado un setTimeout

 asyncScheduler.schedule( () => subs.unsubscribe(), 8000 )

//#endregion