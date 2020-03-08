import { CoffeeMaker } from './coffeeMaker';

export class Commande {

    private order: string;
    private coffeeMaker: CoffeeMaker;
    public static counter: number = 0;

    constructor(order: string, money: number){
        this.order = order;
        const items: string[] = this.parseOrder();
        this.coffeeMaker = new CoffeeMaker(items, money);
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