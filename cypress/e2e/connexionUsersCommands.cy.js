describe("Demo1 : visite du test sauceDemo", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.fixture('connexionUserFixture').as('connexion')
    });

    it("connexion normale", function () {
        const user = this.connexion[0];
        cy.login(user.userName, user.password);
    });

    it.only("Problème de mdp", function () {
        const user = this.connexion[1];
        cy.login(user.userName, user.password)
        cy.get('.error-message-container').invoke('text').should('eq', 'Epic sadface: Username and password do not match any user in this service');

    });

    it("Problème d'@", function () {
        const user = this.connexion[2];
        cy.login(user.userName, user.password);
        cy.get('.error-message-container').invoke('text').should('eq', 'Epic sadface: Username and password do not match any user in this service');

    });

    it("Compte bloqué", function () {
        const user = this.connexion[3];
        cy.login(user.userName, user.password);
        //cy.wait(4000);
        cy.get('.error-message-container').invoke('text').should('eq', 'Epic sadface: Sorry, this user has been locked out.');
    });
});
