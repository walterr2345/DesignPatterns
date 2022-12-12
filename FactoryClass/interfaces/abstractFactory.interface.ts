import AbstractProductSoda from './ProductSoda.interface'
import AbstractProductDithetic from './ProductDithetic.interface'

export default interface IAbstractFactory {

    createSoda(): AbstractProductSoda;

    createSodaDietary(): AbstractProductDithetic;
}