import Observer from "../interface/observer.interface";
import Subject from "../interface/subject.interface";

export class PromoSubject implements Subject {
    public isPromo: Boolean = false;
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        const isExist: Boolean = this.observers.includes(observer);
        if (isExist) {
            return console.log(`observer ${observer.name} existe`);
        }
        this.observers.push(observer);
        console.log(`observer ${observer.name}`);
    }
    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log(`observer ${observer.name} no encontrado`);
        }
        this.observers.splice(observerIndex, 1);
        console.log(`Observer ${observer.name}`);

    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }

    setPromo(status: Boolean): void {
        this.isPromo = status
        this.notify();
    }
}