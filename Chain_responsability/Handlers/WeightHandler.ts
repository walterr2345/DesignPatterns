import { AbstractProductHandler } from "../AbstractClass/AbstractHandler";

export class ProductWeihtHandler extends AbstractProductHandler {
    handle(resquest: any) {
        if (resquest.weight > 7) {
            return `tiene peso excedente a 5`
        }
        return super.handle(resquest)
    }
}