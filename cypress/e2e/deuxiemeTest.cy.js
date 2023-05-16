describe('Nom de la suite de test', () => {
    it('Connexion à demoqa', () => {
       cy.visit('https://demoqa.com/text-box');
       cy.get('#userName').type("Calixte");
       cy.get('#userEmail').type("calixte@gmail.com");
       cy.get('#currentAddress').type("Rue de la foire, 33200 bordeaux");
       cy.get('#permanentAddress').type("Rue de la foire, 33200 bordeaux");
       cy.get('#submit').click()
    });

    });