/// <reference types="cypress" />



describe('Mytm Travels Logout Test Suite', function(){

    let testData;
    before(function(){
        cy.fixture('example').then(function(data){
            testData = data
        })
    });


    it('Mytm Travels Logout Test', function(){

        cy.visit(testData.urlMytmTravels)
        cy.loginMytmTravels(testData.emailMytmTravels, testData.passwordMytmTravels)
        cy.url().should('eq', 'https://mytmtravels.com/')
        cy.get('#li_myaccount').click()
        cy.get('.dropdown-item').contains('Logout').click()
})

})