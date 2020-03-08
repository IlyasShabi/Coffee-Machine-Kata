import { CoffeeMaker } from './coffeeMaker';

export class Commande {

    private order: string;
    private coffeeMaker: CoffeeMaker;
    public static counter: number = 0;

    constructor(order: string){
        this.order = order;
        const items: string[] = this.parseOrder();
        this.coffeeMaker = new CoffeeMaker(items);
        Commande.counter++;
    }
    
    private parseOrder = () : string[] => {
        return this.order.split(':');
    }

    public getCommande = (): string => {
        return this.coffeeMaker.sendMessage();
    }

    public getCounter = () :number =>{
        return Commande.counter;
    }
}