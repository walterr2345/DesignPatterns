import { PromoSubject } from "./class/promoSubject";
import Observer from "./interface/observer.interface";
import Subject from "./interface/subject.interface";

export default class Product implements Observer {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    update(Subject: Subject): void {
        if (Subject instanceof PromoSubject && Subject.isPromo) {
            console.log(`Producto${this.name} se puso en oferta un produto`);
        }
    }
}