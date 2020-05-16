describe("our first test", () =>{
    it('Should run' , () => {
        expect(true).to.equal(true);
    })
})
describe('running the web', () =>{
   it('running local host', () => {
    cy.visit('http://localhost:3000/')
   })
})
describe('testing name ' , () => {
    it('name' , () =>{
        cy.get('#name').type('Ali Adabi')
    })
})
describe('testing Email ' , () => {
    it('Email' , () =>{
        cy.get('#email').type('AliAdabi@aa.com')
    })
})
describe('testing Password ' , () => {
    it('name' , () =>{
        cy.get('#password').type('123456').should('have.value' , '123456')
    })
})