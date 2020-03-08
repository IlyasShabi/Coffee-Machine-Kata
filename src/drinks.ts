export interface IDrink {
    label: string;
    price: number;
    beverageBase: string
}

export const Drinks = {
    "T": { label: "tea", price: 0.4, beverageBase: "water" } as IDrink,
    "H": { label: "chocolate", price: 0.5, beverageBase: "milk" } as IDrink,
    "C": { label: "coffee", price: 0.6 , beverageBase: "water"} as IDrink,
    "O": { label: "juice", price: 0.6 , beverageBase: "water"} as IDrink,
    "Th": { label: "extra hot tea", price: 0.4, beverageBase: "water" } as IDrink,
    "Hh": { label: "extra hot chocolate", price: 0.5, beverageBase: "milk" } as IDrink,
    "Ch": { label: "extra hot coffee", price: 0.6, beverageBase: "water" } as IDrink,
};