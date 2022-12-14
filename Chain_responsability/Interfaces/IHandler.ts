export interface Handler {
    setNext(hanlder: Handler): Handler;
    handle(resquest: any): any
}