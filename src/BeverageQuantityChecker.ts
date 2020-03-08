import { CoffeeMaker } from "./coffeeMaker";
import { EmailNotifier } from "./EmailNotifier";

export interface IBeverageQuantityChecker {
    isEmpty(drink: string): boolean
}

export class BeverageQuantityChecker implements  IBeverageQuantityChecker {
    isEmpty = (drink: string): boolean => {
        CoffeeMaker.beverage[drink] -= 0.5;
        if (CoffeeMaker.beverage[drink] > 0) return false;
        const emailNotifier = new EmailNotifier();
        emailNotifier.notifyMissingDrink(drink);
        return true;

    }
}