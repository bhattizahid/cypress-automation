/// <reference types="Cypress" />


describe('UI Test Suite', () => {
    it('Advanced UI Elements', () => {
      
     //Check boxes
cy.visit("https://www.qaclickacademy.com/")

cy.url().should('include', 'qaclickacademy')

cy.go('back')
    
    })
  })