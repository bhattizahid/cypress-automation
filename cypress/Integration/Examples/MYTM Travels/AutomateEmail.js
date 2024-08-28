/// <reference types="Cypress" />

describe('Open HRM Suit', () => {
    it('Login Test', () => {

cy.visit("https://gmail.com")

cy.wait(3000)

cy.get('body').type('zahid.nawaz@xintsolutions.com')
cy.wait(3000)
cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
cy.wait(3000)
cy.get('#password').type('Xint@8777')
cy.wait(3000)
cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
cy.wait(3000)

    
    })
  })