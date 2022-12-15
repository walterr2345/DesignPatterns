import Observer from "./observer.interface";

export default interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void
}