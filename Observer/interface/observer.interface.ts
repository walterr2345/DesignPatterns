import Subject from "./subject.interface";

export default interface Observer {
    name: string;
    update(Subject: Subject): void
}