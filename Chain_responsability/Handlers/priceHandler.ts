import { AbstractProductHandler } from "../AbstractClass/AbstractHandler";

export class ProductPriceHandler extends AbstractProductHandler {
    handle(resquest: any) {
        if (resquest.price > 150) {
            return `El precio tiene mas de 150`
        }
        return super.handle(resquest)
    }
}