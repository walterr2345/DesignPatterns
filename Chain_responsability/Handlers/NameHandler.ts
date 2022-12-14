import { AbstractProductHandler } from "../AbstractClass/AbstractHandler";

export class ProductNameHandler extends AbstractProductHandler {
    handle(resquest: any) {
        if (resquest.name.length > 20) {
            return `El nombre tiene mas de 20 caracteres`
        }
        return super.handle(resquest)
    }
}