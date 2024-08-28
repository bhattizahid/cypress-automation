// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('loadElementData', () => {
  cy.fixture('MYTMTravelsElements.json').as('ElementData');
});


//const { contains } = require("cypress/types/jquery")

//
Cypress.Commands.add("selectProduct", (productName)  =>{
    cy.get('h4.card-title').each(($e1, index, $list) => {

        if($e1.text().includes(productName))
        {
          cy.get('button.btn.btn-info').eq(index).click()
    
        }
     })
})

Cypress.Commands.add('login', (name, email, phone) => {
  
      cy.get('span').contains('Sign in or Register').click()
      cy.get('#guest_name').type(name)
      cy.get('#guest_email').type(email)
      cy.get('#guest_phone').type(phone)
      cy.wait(3000)
      cy.get('#otp-send').click()
      //cy.wait(15000) 
      //cy.get('#otp-verify').click()
})

Cypress.Commands.add('flightOnewayBooking', (departure, arrival, date) => {
      cy.get('#from_where').type(departure)
      cy.get('#from_whereautocomplete-list div').contains('Alama Iqbal International Airport').click()
      cy.get('#to_where').type(arrival)
      cy.get('#to_whereautocomplete-list div').contains('Jinnah International Airport').click()
      cy.wait(2000)
      cy.get('#txtDate').invoke('attr', 'value', date)
      cy.get('#btnSearch').click()
})

Cypress.Commands.add('loginMytmTravels', (email, password) => {
  
  cy.get('.go-right').contains(' Login/Sign Up').click()
  cy.get('#loginEmail').type(email)
  cy.get('#password').type(password)
  cy.get('button[type="submit"]').contains('Login').click()
})

Cypress.Commands.add('flightOnewayBookingMytmTravels', (departure, arrival, depDate, noOfAdult, noOfChild, noOfInfant, flightClass) => {

  var flightBrand = '[data-carrier="EY"]'
  cy.get('#select2-departure_location-container').type(departure)
  cy.get('.select2-results__option--highlighted').click()

  cy.get('#select2-destination-container').type(arrival)
  cy.get('.select2-results__option--highlighted').click()

  cy.get('#departure_date').type(depDate)
 
  cy.get('#totalManualPassenger').click()
  cy.get('#madult').select(noOfAdult)
  cy.get('#mchildren').select(noOfChild)
  cy.get('#minfant').select(noOfInfant)
  cy.get('#sumManualPassenger').click()
 
  cy.get('#class_type').select(flightClass)

  cy.get('.search_flights_btn').click()

  cy.get(flightBrand).first().contains('View Details').click()

})

Cypress.Commands.add('flightReturnBookingMytmTravels', (departure, arrival, depDate, arrDate, noOfAdult, noOfChild, noOfInfant, flightClass) => {

  var flightBrand = '[data-carrier="EY"]'
  cy.get('#round').click()
  cy.get('#select2-departure_location-container').type(departure)
  cy.get('.select2-results__option--highlighted').click()

  cy.get('#select2-destination-container').type(arrival)
  cy.get('.select2-results__option--highlighted').click()

  cy.get('#departure_date').type(depDate)
  cy.get('#arrival').type(arrDate)

  cy.get('#totalManualPassenger').click()
  cy.get('#madult').select(noOfAdult)
  cy.get('#mchildren').select(noOfChild)
  cy.get('#minfant').select(noOfInfant)
  cy.get('#sumManualPassenger').click()

  cy.get('#class_type').select(flightClass)

  cy.get('.search_flights_btn').click()
  cy.get(flightBrand).first().contains('View Details').click()

})
Cypress.Commands.add('flightForm1', (title1, surname1, fname1, dob1, gender1, nationality1, DocType1, DocNumber1, DocExpDate1, note) => {

//cy.get('#myPassengers_1').click()
cy.get('#passengerTitle_1').select(title1)
cy.get('#surname_1').type(surname1)
cy.get('#fullname_1').type(fname1)
cy.get('#passengerDOB_1').type(dob1)
cy.get('#passengerGender_1').select(gender1)
cy.get('#passengerNationality_1').select(nationality1)
cy.get('#passengerDocumentType_1').select(DocType1)
cy.get('#passengerDocumentNumber_1').type(DocNumber1)
cy.get('#passengerDocumentExpiryDate_1').type(DocExpDate1)
cy.get('#note').type(note)

})

Cypress.Commands.add('flightForm2', (title2, surname2, fname2, dob2, gender2, nationality2, DocType2, DocNumber2, DocExpDate2) => {

  //cy.get('#myPassengers_2').click()
  cy.get('#passengerTitle_2').select(title2)
  cy.get('#surname_2').type(surname2)
  cy.get('#fullname_2').type(fname2)
  cy.get('#passengerDOB_2').type(dob2)
  cy.get('#passengerGender_2').select(gender2)
  cy.get('#passengerNationality_2').select(nationality2)
  cy.get('#passengerDocumentType_2').select(DocType2)
  cy.get('#passengerDocumentNumber_2').type(DocNumber2)
  cy.get('#passengerDocumentExpiryDate_2').type(DocExpDate2)
  
  })

  Cypress.Commands.add('flightForm3', (title3, surname3, fname3, dob3, gender3, nationality3, DocType3, DocNumber3, DocExpDate3) => {

    //cy.get('#myPassengers_3').click()
    cy.get('#passengerTitle_3').select(title3)
    cy.get('#surname_3').type(surname3)
    cy.get('#fullname_3').type(fname3)
    cy.get('#passengerDOB_3').type(dob3)
    cy.get('#passengerGender_3').select(gender3)
    cy.get('#passengerNationality_3').select(nationality3)
    cy.get('#passengerDocumentType_3').select(DocType3)
    cy.get('#passengerDocumentNumber_3').type(DocNumber3)
    cy.get('#passengerDocumentExpiryDate_3').type(DocExpDate3)
    
    })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })