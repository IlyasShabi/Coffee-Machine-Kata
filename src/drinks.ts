export interface IDrink {
    label: string;
    price: number;
}

export const Drinks = {
    "T": { label: "tea", price: 0.4 } as IDrink,
    "H": { label: "chocolate", price: 0.5 } as IDrink,
    "C": { label: "coffee", price: 0.6 } as IDrink,
    "O": { label: "juice", price: 0.6 } as IDrink,
    "Th": { label: "extra hot tea", price: 0.4 } as IDrink,
    "Hh": { label: "extra hot chocolate", price: 0.5 } as IDrink,
    "Ch": { label: "extra hot coffee", price: 0.6 } as IDrink,
};