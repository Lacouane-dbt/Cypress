describe ("Travail sur les api json placeholder", ()=> {
    it('Récupérer des photos', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/photos').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.length.above(4000);
        });
    });
    it('Récupérer un user spcécifique', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users/10').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(10);
        });
    });
    it('Créer un commentaire', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/comments', {
            id:"501",
            name: "nouvel note de test",
            email:"dd@f.fr",
            body:"kbdjcshdbcjshdbcjhsd" }).then((response) => {

                expect(response.status).to.equal(201);
        });
    });
    
    it('Delete un commentaire', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/comments/501', ()=>{
            expect(response.status).to.equal(200);
        });
    });
});