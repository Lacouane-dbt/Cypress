// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('noteParId', (id) => {
        cy.request({
            url: `https://practice.expandtesting.com/notes/api/notes/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'b15e98af23584353a2215d299032fe5086ed34b00c30415c97be54f8f87a061f'
              }
        }); 
    });

    Cypress.Commands.add('deleteNote', (idDelete) => {
        cy.request({
            url: `https://practice.expandtesting.com/notes/api/notes/${idDelete}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'b15e98af23584353a2215d299032fe5086ed34b00c30415c97be54f8f87a061f'
              }
        }); 
    });