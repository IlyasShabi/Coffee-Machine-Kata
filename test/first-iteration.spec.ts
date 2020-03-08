import { Commande } from '../src/commande';

describe('First Iteration test cases', () => {

	it('Tea with 1 sugar and a stick => T:1:0', () => {

		const commande  = new Commande("T:1:0");
        const result = commande.getCommande();
        expect(result).toEqual("Drink maker makes 1 tea with 1 sugar and a stick");
        
	});

	it('Chocolate with no sugar and no stick => H::', () => {
        const commande  = new Commande("H::");
        const result = commande.getCommande();
		expect(result).toEqual("Drink maker makes 1 chocolate with no sugar - and therefore no stick");
	});

});

