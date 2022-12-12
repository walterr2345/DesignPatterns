import ProductDithetic from '../interfaces/ProductDithetic.interface'

export default class SodaFantaDiathetic implements ProductDithetic {
    public createProductDithetic(): string {
        return 'The result is created Fanta diathetic';
    }
}