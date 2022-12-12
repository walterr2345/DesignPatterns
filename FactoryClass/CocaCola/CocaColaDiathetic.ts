import ProductDithetic from '../interfaces/ProductDithetic.interface'

export default class CocaColaDiathetic implements ProductDithetic {
    public createProductDithetic(): string {
        return 'The result is created CocaCola diathetic';
    }
}