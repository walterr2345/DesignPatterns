import AbstractFactory from '../interfaces/abstractFactory.interface'
import SodaFanta from '../Fanta/FantaClass';
import ProductSoda from '../interfaces/ProductSoda.interface';
import ProductDithetic from '../interfaces/ProductDithetic.interface';
import SodaFantaDiathetic from '../Fanta/FantaClassDiathetic';

export default class FantaFactory implements AbstractFactory {
    public createSoda(): ProductSoda {
        return new SodaFanta();
    }

    public createSodaDietary(): ProductDithetic {
        return new SodaFantaDiathetic();
    }
}