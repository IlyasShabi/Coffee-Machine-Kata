import { Drinks } from './drinks';

export class CoffeeMaker {

    private drink: string;
    private sugar: number;
    private stick: number;

    constructor(items: string[]){
        this.drink = Drinks[items[0]];
        this.sugar = this.setSugar(items[1]);
        this.stick = this.setStick();
    }

    private setSugar = (item:string) : number => {
        if (!item) return 0;
        return parseInt(item);
    }

    private setStick = () : number => {
        return this.sugar ? 1 : 0;
    }

    public sendMessage = () :string => {

        const drinkStr = `Drink maker makes 1 ${this.drink} with`;

        if(this.sugar){
            return `${drinkStr} ${this.sugar} sugar and a stick`;
        }else{
            return `${drinkStr} no sugar - and therefore no stick`;
        }
    }

}
