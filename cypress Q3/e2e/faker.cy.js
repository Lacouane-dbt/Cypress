import { faker } from '@faker-js/faker';

// Utilisation de la bibliothèque  Faker
describe('Test du formulaire de saisie de texte', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/text-box');
    });
  
    it('Remplir le formulaire avec des données Faker', () => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = faker.internet.email();
      const currentAddress = faker.address.streetAddress();
      const permanentAddress = faker.address.streetAddress();
  
      cy.get('#userName').type(`${firstName} ${lastName}`);
      cy.get('#userEmail').type(email);
      cy.get('#currentAddress').type(currentAddress);
      cy.get('#permanentAddress').type(permanentAddress);
  
      cy.get('#submit').click();
  
    });
    it('Remplir le formulaire avec des données Faker', () => {
    
        cy.get('#userName').type(faker.name.firstName());
        cy.get('#userEmail').type(faker.internet.email());
        cy.get('#currentAddress').type(faker.address.streetAddress());
        cy.get('#permanentAddress').type(faker.address.streetAddress());
    
        cy.get('#submit').click();
    
  });
});