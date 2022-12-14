import { Handler } from "../Interfaces/IHandler";

export abstract class AbstractProductHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(hanlder: Handler): Handler {
        this.nextHandler = hanlder
        return hanlder
    }

    handle(resquest: any) {
        if (this.nextHandler) {
            return this.nextHandler.handle(resquest)
        }
        return resquest
    }
}