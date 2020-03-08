import { Drinks, IDrink } from './drinks';

export class CoffeeMaker {

    private drink: IDrink;
    private sugar: number;
    private stick: number;
    private money: number;
    public static history: Map<string, number> = new Map<string, number>();
    public static amount: number = 0;

    constructor(items: string[], money: number) {
        this.drink = Drinks[items[0]];
        this.sugar = this.setSugar(items[1]);
        this.stick = this.setStick();
        this.money = money;
    }

    private setSugar = (item: string): number => {
        if (!item) return 0;
        return parseInt(item);
    }

    private setStick = (): number => {
        return this.sugar ? 1 : 0;
    }

    public getOrder = (): string => {
        return this.money >= this.drink.price ? this.makeDrink() : this.needMoney();
    }

    private makeDrink = (): string => {
        this.updateReporting();
        return `Drink: ${this.drink.label} - Sugar: ${this.sugar} - Stick: ${this.stick}`;
    }

    private needMoney = (): string => {
        const diff: string = (this.drink.price - this.money).toFixed(1);
        return `Sorry we can't make your order. You need ${diff} other`;
    }

    private updateReporting = () => {
        const count = CoffeeMaker.history.get(this.drink.label);
        if(count){
            CoffeeMaker.history.set(this.drink.label, count + 1);
        }else{
            CoffeeMaker.history.set(this.drink.label, 1);
        }
        CoffeeMaker.amount += this.drink.price;
    }

    public getNumberOfSales = () : number => {
        const count = CoffeeMaker.history.get(this.drink.label);
        return count || 0;
    }

}
