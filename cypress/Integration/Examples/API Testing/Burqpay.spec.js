/// <reference types="Cypress" />


describe('UI Test Suite', () => {
    it('Advanced UI Elements', () => {
        cy.visit("https://burqpay.com/")
        cy.get("a[type='submit']").click()
        cy.wait(3000)
        cy.get("#email").type("m.rohail@xintsolutions.com")
        cy.wait(3000)
        cy.get("input[name='password']").type("Admin@123")
        cy.wait(3000)
        cy.get("#signbtn").click()





    })
  })