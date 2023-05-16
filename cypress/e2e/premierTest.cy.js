describe('Nom de la suite de test', () => {
    it.only('Nom du premier scenario de test', () => {
       cy.log("Je suis dans le premier Scénario")
        });
        
    it('Nom du deuxième scenario de test', () => {
        cy.log("Je suis dans le deuxiem Scénario")
        });

    it('Nom du troisieme scenario de test', () => {
        cy.log("Je suis dans le troisieme Scénario")
             }); 
    });


//it.skip / it.only / 
//describe () / contexte ()
// it () / specify ()
