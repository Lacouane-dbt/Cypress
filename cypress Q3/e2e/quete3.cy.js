const { faker } = require('@faker-js/faker');

describe("Utilisation de l'API note", () => {

  let authToken = null;
  let noteDlte = null;
  let user = require('../fixtures/creationNote');

  before('Login api note', () => {
    cy.request({
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        'email': 'calixte.legrix@gmail.com',
        'password': 'gGhJ67&K!'
      }
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200),
        authToken = response.body.data.token
    });
  });

  it('Appel de notes', () => {
    cy.request({
      url: 'https://practice.expandtesting.com/notes/api/notes',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': authToken
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Création de notes', () => {
    cy.request({
      url: 'https://practice.expandtesting.com/notes/api/notes',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': authToken
      },
      body: {
        'title': 'Note1 utilisant cypress',
        'description': 'Description de ma note1 créée grâce à cypress',
        'category': 'Work'
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    });
  });

  it('Création de notes par appel du dossier fixtures', () => {
   const users= user[0]
    cy.request({
      url: 'https://practice.expandtesting.com/notes/api/notes',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': authToken
      },
      body: {
        'title': users.title,
        'description': users.description,
        'category': users.category
      }

    }).then((response) => {
      expect(response.status).to.equal(200)
      noteDlte = response.body.data.id;
    });
  });


  it("Appel d'une note spécifique", () => {
    cy.noteParId(noteDlte).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200)
    });
  });

  after("Delete notes", () => {
    cy.deleteNote(noteDlte).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200)
    });
  });
});
