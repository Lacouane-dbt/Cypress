describe ("Demo1 : visite du test sauceDemo", ()=>{
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com');
    });


    it("connexion normale", () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');        
        cy.get('[data-test="login-button"]').click();
    });

    it("connexion 2 - problème de mdp", () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_david');        
        cy.get('[data-test="login-button"]').click();
    });

    it("connexion sauce demo3 - Problème de compte", () => {
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');        
        cy.get('[data-test="login-button"]').click();
    });

    it("connexion sauce demo4 - compte user cloqué", () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');        
        cy.get('[data-test="login-button"]').click();
    });
});
