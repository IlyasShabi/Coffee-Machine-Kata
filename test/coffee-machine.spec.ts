import { Commande } from '../src/commande';

describe('Coffee Machine test cases', () => {

	it('Tea with 1 sugar and a stick => T:1:0', () => {

		const commande  = new Commande("T:1:0", 1);
        const result = commande.getCommande();
        expect(result).toEqual("Drink: tea - Sugar: 1 - Stick: 1");
        
	});

	it('Chocolate with no sugar and no stick => H::', () => {
        const commande  = new Commande("H::", 1);
        const result = commande.getCommande();
		expect(result).toEqual("Drink: chocolate - Sugar: 0 - Stick: 0");
	});

	it('Coffee with 2 sugars => C:2:0', () => {
        const commande  = new Commande("C:2:0", 1);
        const result = commande.getCommande();
		expect(result).toEqual("Drink: coffee - Sugar: 2 - Stick: 1")
	});

	it('We need more money => C:2:0', () => {
        const commande  = new Commande("C:2:0", 0.5);
        const result = commande.getCommande();
		expect(result).toEqual("Sorry we can't make your order. You need 0.1 other")
	});

	it('Juice order => O::', () => {
        const commande  = new Commande("O::", 0.8);
        const result = commande.getCommande();
		expect(result).toEqual("Drink: juice - Sugar: 0 - Stick: 0")
	});

	it('Extra hot Tea with 3 sugars and a stick => T:3:0', () => {

		const commande  = new Commande("Th:3:0", 1);
        const result = commande.getCommande();
        expect(result).toEqual("Drink: extra hot tea - Sugar: 3 - Stick: 1");
        
	});

	it('Extra hot Chocolate with one sugar and one stick => H:1:0', () => {
        const commande  = new Commande("H:1:0", 1);
        const result = commande.getCommande();
		expect(result).toEqual("Drink: extra hot chocolate - Sugar: 1 - Stick: 1");
	});

	it('Extra hot Coffee with 2 sugars => C:2:0', () => {
        const commande  = new Commande("C:2:0", 1);
        const result = commande.getCommande();
		expect(result).toEqual("Drink: extra hot coffee - Sugar: 2 - Stick: 1")
	});

});

