/// <reference types="Cypress" />



describe('MyTravels Test Suite', () => {
    it('Flight Booking Test', () => {

cy.visit("https://mytmtravels.com/")

cy.wait(4000)

cy.get('#select2-departure_location-container').type('lhe')
cy.get('.select2-results__option--highlighted').click()

cy.get('#select2-destination-container').type('dubai')
cy.get('.select2-results__option--highlighted').click()

cy.get('#departure_date').type('2023-08-10')

cy.get('.search_flights_btn').click()

cy.get('[data-carrier="PK"] > .flightForm > .col-sm-12 > .flight-details-return-round > .third > .btn').click()


cy.get('#guest_name').type('Muhammad asif')
cy.get('#guest_email').type('forzahid1@gmail.com')
cy.get('#guest_phone').type('3026858990')

cy.get('#otpsend').click()

cy.wait(20000)

cy.get('#otpverify').click()




//cy.get('#from_where').type('lh')
//cy.get('#from_whereautocomplete-list div').contains('Alama Iqbal International Airport').click()
//cy.get('#to_where').type('kar')
//cy.get('#to_whereautocomplete-list div').contains('Jinnah International Airport').click()

//cy.wait(4000)
//cy.get('[id="txtDate"]').click()



//cy.get('#btnSearch').click()

    
    })
  })