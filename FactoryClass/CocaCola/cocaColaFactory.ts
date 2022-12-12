import ProductSoda from '../interfaces/ProductSoda.interface'
import ProductDithetic from '../interfaces/ProductDithetic.interface'
import AbstractFactory from '../interfaces/abstractFactory.interface'
import SodaCocaCola from './CocaColaClass';
import CocaColaDiathetic from './CocaColaDiathetic';


export default class CocaColaFactory implements AbstractFactory {
    public createSoda(): ProductSoda {
        return new SodaCocaCola();
    }

    public createSodaDietary(): ProductDithetic {
        return new CocaColaDiathetic();
    }
}

