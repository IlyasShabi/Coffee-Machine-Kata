import { CoffeeMaker } from './coffeeMaker';

export class Commande {

    private order: string;
    private coffeeMaker: CoffeeMaker;

    constructor(order: string, money: number) {
        this.order = order;
        const items: string[] = this.parseOrder();
        this.coffeeMaker = new CoffeeMaker(items, money);
    }

    private parseOrder = (): string[] => {
        return this.order.split(':');
    }

    public getCommande = (): string => {
        return this.coffeeMaker.getOrder();
    }

    public getReport = (): string => {
        let output: string = `We earned : ${CoffeeMaker.amount}$\n`;
        CoffeeMaker.history.forEach((sales, drink) => {
            output += `Drink : ${drink} - Sales : ${sales}\n`;
        });
        return output;
    }

    public getTotalAmount = ():number => {
        return CoffeeMaker.amount;
    }

    public getNumberOfSalesByDrink = () : number => {
        return this.coffeeMaker.getNumberOfSales();
    }

}