/// <reference types="Cypress" />



describe('Open HRM Suit', () => {
    it('Login Test', () => {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get('.oxd-button').click()

cy.get('.oxd-userdropdown-tab').click()
cy.contains('Logout').click()
//cy.get(':nth-child(4) > .oxd-userdropdown-link')


    
    })
  })