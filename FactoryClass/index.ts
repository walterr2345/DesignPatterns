import FantaFactory from './Fanta/FantaFactory';
import CocaColaFactory from './CocaCola/cocaColaFactory';
import store from './store';

const storeClient = new store()

console.log('----------------------------------------------------------');
console.log('Client buy Fanta Product');
storeClient.sellAll(new FantaFactory());

console.log('----------------------------------------------------------');

console.log('Client buy CocaCola Product:');
storeClient.sellAll(new CocaColaFactory());
console.log('----------------------------------------------------------');

