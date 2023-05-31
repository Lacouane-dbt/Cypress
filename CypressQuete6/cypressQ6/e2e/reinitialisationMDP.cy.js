describe('Réinisialisation mot de passe', () => {
  it('Enregistrement compte', () => {
    cy.visit('http://preprod.backmarket.fr/')
    //cy.get('[data-qa="accept-cta"]').click();
    cy.get('[class="w-5 h-5 mr-5 md:mr-3 lg:mr-5 md:w-6 md:h-6"]').click();
    cy.get('#email').type('c181b5f2-3d41-45f6-be8b-7614ec1756da@mailslurp.com');
    cy.get('#submit-login').click();
    cy.get('.mb-7').click();
    cy.get('[data-test="password-reset-submit-button"]').click();
    cy.mailslurp()
      .then(mailslurp => mailslurp.waitForLatestEmail('c181b5f2-3d41-45f6-be8b-7614ec1756da', 40000, true))
      .then(email /*=> expect(email.subject).to.contain("Nouveau mot de passe")*/ => cy.document().invoke("write", email.body))
    cy.get('.t_pt20px > a').click();
    cy.get('#newPassword').type('AZERTy1234');
    cy.get('#newPasswordConfirmation').type('AZERTy1234');
    cy.get('.MkLAMntR').click();
    cy.get('#email').type('c181b5f2-3d41-45f6-be8b-7614ec1756da@mailslurp.com');
    cy.get('#submit-login').click();
    cy.get('#password').type('AZERTy1234');
    cy.get('#submit-login').click();
    })
})
