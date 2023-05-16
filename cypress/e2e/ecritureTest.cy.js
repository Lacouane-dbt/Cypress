describe("Test d'authentification", () => {
    it.skip('login', () => {
        cy.visit ('https://preprod.backmarket.fr/fr-fr/register');
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('#signin-email').type('calixte33@orange.fr');
        cy.get('#signin-password').type('pidRor-pirhog-7bofwe');
        cy.get('[data-qa="signin-submit-button"]').click();
    });

    it.only("Création de compte - echec : email déjà existant", () => {
        cy.visit ('https://preprod.backmarket.fr/fr-fr/register');
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('#firstName').type('calixte');
        cy.get('#lastName').type('lgx');
        cy.get('#signup-email').type('calixte33@orange.fr');
        cy.get('#signup-password').type('pidRor-pirhog-7bofwe');
        cy.get('[data-qa="signup-submit-button"]').click();
        cy.screenshot('testEchecEmail')
    });

    it("Création de compte - mot de passe incorrect", () => {
        cy.visit ('https://preprod.backmarket.fr/fr-fr/register');
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('#firstName').type('calixte');
        cy.get('#lastName').type('lgx');
        cy.get('#signup-email').type('calixte33@orange.fr');
        cy.get('#signup-password').type('1234az');
        cy.get('[data-qa="signup-submit-button"]').click();
        cy.screenshot('testPasswordIncorrect')
    });
});

