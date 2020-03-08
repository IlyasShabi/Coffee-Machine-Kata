import { CoffeeMaker } from "./coffeeMaker";

export interface IBeverageQuantityChecker {
    isEmpty(drink: string): boolean
}

export class BeverageQuantityChecker implements  IBeverageQuantityChecker {
    isEmpty = (drink: string): boolean => {
        CoffeeMaker.beverage[drink] -= 0.5;
        if (CoffeeMaker.beverage[drink] > 0) return false;
        return true;

    }
}