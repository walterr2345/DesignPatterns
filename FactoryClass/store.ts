import AbstractFactory from './interfaces/abstractFactory.interface'

export default class store {

    public sellAll(factory: AbstractFactory) {
        const productA = factory.createSoda();
        const productB = factory.createSodaDietary();

        console.log(productA.createProductSoda());
        console.log(productB.createProductDithetic());
    }

    public sellSoda(factory: AbstractFactory) {
        const productA = factory.createSoda();

        console.log(productA.createProductSoda());
    }

    public sellDiathetic(factory: AbstractFactory) {
        const productB = factory.createSodaDietary();
        
        console.log(productB.createProductDithetic());
    }

}