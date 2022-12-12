import ProductSoda from '../interfaces/ProductSoda.interface'

 export default class SodaFanta implements ProductSoda {
    public createProductSoda(): string {
        return 'The result is created soda Fanta ';
    }
}