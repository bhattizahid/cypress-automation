/// <reference types="cypress" />



describe('Mytm Travels Login Test Suite', function(){

    let testData;
    before(function(){
        cy.fixture('example').then(function(data){
            testData = data
        })
    });


    it('Mytm Travels Login Test with valid Credentials', function(){

        cy.visit(testData.urlMytmTravels)
        cy.loginMytmTravels(testData.emailMytmTravels, testData.passwordMytmTravels)
        cy.url().should('eq', 'https://mytmtravels.com/')
        cy.get('#li_myaccount').click()
        cy.get('.dropdown-item').contains('Logout').click()
})

    it('Mytm Travels Login Test with invalid Credentials', function(){

    cy.visit(testData.urlMytmTravels)
    cy.loginMytmTravels(testData.invalidEmailMytmTravels, testData.invalidPasswordMytmTravels)
    cy.get('.invalid-feedback') 
    .should('be.visible')
    .and('contain', 'These credentials do not match our records.');

})
})