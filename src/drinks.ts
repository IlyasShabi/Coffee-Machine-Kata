export interface IDrink {
    label: string;
    price: number;
}

export const Drinks = {
    "T": { label: "tea", price: 0.4 } as IDrink,
    "H": { label: "chocolate", price: 0.5 } as IDrink,
    "C": { label: "coffee", price: 0.6 } as IDrink
};