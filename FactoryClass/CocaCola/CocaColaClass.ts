import ProductSoda from '../interfaces/ProductSoda.interface'

export default class SodaCocaCola implements ProductSoda {
    public createProductSoda(): string {
        return 'The result is created Soda CocaCola';
    }
}