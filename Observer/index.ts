import { PromoSubject } from "./class/promoSubject";
import Product from "./product";

// class Product implements Observer {
//     name: string
//     constructor(name: string) {
//         this.name = name;
//     }
//     update(Subject: Subject): void {
//         if (Subject instanceof PromoSubject && Subject.isPromo) {
//             console.log(`Producto${this.name} se puso en oferta un produto`);
//         }
//     }
// }

const promo = new PromoSubject();

const cocaCola = new Product('CocaCola')
const cocaColaLight = new Product('cocaColaLight')
const cocaColaDiethetic = new Product('cocaColaDiethetic')

promo.subscribe(cocaCola)
promo.subscribe(cocaColaLight)

promo.setPromo(true)
promo.unsubscribe(cocaColaDiethetic)

console.log(promo);
