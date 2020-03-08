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
        const drinkStr = `Drink maker makes 1 ${this.drink.label} with`;
        if (this.sugar) {
            return `${drinkStr} ${this.sugar} sugar${this.sugar > 1 ? 's' : ''} and a stick`;
        } else {
            return `${drinkStr} no sugar - and therefore no stick`;
        }
    }

    private needMoney = (): string => {
        return 'Need money';
    }

}
