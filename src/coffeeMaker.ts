import { Drinks, IDrink } from './drinks';

export class CoffeeMaker {

    private drink: IDrink;
    private sugar: number;
    private stick: number;
    private money: number;

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

    public sendMessage = (): string => {
        return this.money >= this.drink.price ? this.makeDrink() : this.needMoney();
    }

    private makeDrink = (): string => {
        return `Drink: ${this.drink.label} - Sugar: ${this.sugar} - Stick: ${this.stick}`
    }

    private needMoney = (): string => {
        const diff: string = (this.drink.price - this.money).toFixed(1);
        return `Sorry we can't make your order. You need ${diff} other`;
    }

}
