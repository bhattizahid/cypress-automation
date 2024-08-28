/// <reference types="Cypress" />


describe('SadaTicket Main Test Suite', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
    
    it('SadaTicket Login Test', function(){
        cy.visit(this.data.url)
        cy.login(this.data.name, this.data.email, this.data.phone)
    })

})