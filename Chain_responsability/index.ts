import { ProductNameHandler } from "./Handlers/NameHandler";
import { ProductPriceHandler } from "./Handlers/priceHandler";
import { ProductWeihtHandler } from "./Handlers/WeightHandler";
import { Product } from "./productClass";



const Product1 = new Product('A', 130, 5)
const Product2 = new Product('B', 140, 3)
const Product3 = new Product('C', 130, 8)

const nameHandler = new ProductNameHandler()
const priceHandler = new ProductPriceHandler()
const weightHandler = new ProductWeihtHandler()

nameHandler.setNext(priceHandler).setNext(weightHandler)

console.log(nameHandler.handle(Product1));
console.log(nameHandler.handle(Product2));
console.log(nameHandler.handle(Product3));
