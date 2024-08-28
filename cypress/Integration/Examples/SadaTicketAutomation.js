/// <reference types="Cypress" />



describe('SadaTicket Test Suite', () => {
    it('Login Test', () => {

cy.visit("https://sadaticket.com/")

//cy.get('span').contains('Sign in or Register').click()
//cy.get('#guest_name').type('Zahid')
//cy.get('#guest_email').type('zahid.nawaz@xintsolutions.com')
//cy.get('#guest_phone').type('3026858990')
//cy.get('#otp-send').click()
//cy.wait(15000) 
//cy.get('#otp-verify').click()

cy.wait(4000)

cy.get('#from_where').type('lh')
cy.get('#from_whereautocomplete-list div').contains('Alama Iqbal International Airport').click()
cy.get('#to_where').type('kar')
cy.get('#to_whereautocomplete-list div').contains('Jinnah International Airport').click()

cy.wait(2000)
cy.get('#txtDate').invoke('attr', 'value', '2023-08-15')



//cy.get('#btnSearch').click()

    
    })
  })