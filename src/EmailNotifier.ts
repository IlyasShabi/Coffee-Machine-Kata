export interface IEmailNotifier {
    notifyMissingDrink(drink: string): void
}

export class EmailNotifier implements  IEmailNotifier {
    notifyMissingDrink = (drink: string): void => {
        console.log(`No more beverage in order to make ${drink}`);
    }
}