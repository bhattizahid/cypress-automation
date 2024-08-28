/// <reference types="Cypress" />



describe('Mytm Travels Main Test Suite', function(){

    let testData;
    before(function(){
        cy.fixture('example').then(function(data){
            testData = data
        })
    })
    
    it('Mytm Travels Login Test', function(){
        cy.visit(testData.urlMytmTravels)
        cy.loginMytmTravels(testData.emailMytmTravels, testData.passwordMytmTravels)
        
        if(testData.arrDate!=null)
        {
            if(testData.noOfAdult==1 && testData.noOfChild==0 && testData.noOfInfant==0)
            {
                cy.flightReturnBookingMytmTravels(testData.departure, testData.arrival, testData.depDate, testData.arrDate, testData.noOfAdult, testData.noOfChild, testData.noOfInfant, testData.flightClass)
                cy.flightForm1(testData.title1, testData.surname1, testData.fname1, testData.dob1, testData.gender1, testData.nationality1, testData.DocType1, testData.DocNumber1, testData.DocExpDate1, testData.note)
            }
            else if(testData.noOfAdult==1 && testData.noOfChild==1 && testData.noOfInfant==0)
            {
                cy.flightReturnBookingMytmTravels(testData.departure, testData.arrival, testData.depDate, testData.arrDate, testData.noOfAdult, testData.noOfChild, testData.noOfInfant, testData.flightClass)
                cy.flightForm1(testData.title1, testData.surname1, testData.fname1, testData.dob1, testData.gender1, testData.nationality1, testData.DocType1, testData.DocNumber1, testData.DocExpDate1, testData.note)
                cy.flightForm2(testData.title2, testData.surname2, testData.fname2, testData.dob2, testData.gender2, testData.nationality2, testData.DocType2, testData.DocNumber2, testData.DocExpDate2)
            }
            else
            {
                cy.flightReturnBookingMytmTravels(testData.departure, testData.arrival, testData.depDate, testData.arrDate, testData.noOfAdult, testData.noOfChild, testData.noOfInfant, testData.flightClass)
                cy.flightForm1(testData.title1, testData.surname1, testData.fname1, testData.dob1, testData.gender1, testData.nationality1, testData.DocType1, testData.DocNumber1, testData.DocExpDate1, testData.note)
                cy.flightForm2(testData.title2, testData.surname2, testData.fname2, testData.dob2, testData.gender2, testData.nationality2, testData.DocType2, testData.DocNumber2, testData.DocExpDate2)
                cy.flightForm3(testData.title3, testData.surname3, testData.fname3, testData.dob3, testData.gender3, testData.nationality3, testData.DocType3, testData.DocNumber3, testData.DocExpDate3)
            }
        }
        else
        {
            if(testData.noOfAdult==1 && testData.noOfChild==0 && testData.noOfInfant==0)
            {
                cy.flightOnewayBookingMytmTravels(testData.departure, testData.arrival, testData.depDate, testData.noOfAdult, testData.noOfChild, testData.noOfInfant, testData.flightClass)
                cy.flightForm1(testData.title1, testData.surname1, testData.fname1, testData.dob1, testData.gender1, testData.nationality1, testData.DocType1, testData.DocNumber1, testData.DocExpDate1, testData.note)
            }
            else if(testData.noOfAdult==1 && testData.noOfChild==1 && testData.noOfInfant==0)
            {
                cy.flightOnewayBookingMytmTravels(testData.departure, testData.arrival, testData.depDate, testData.noOfAdult, testData.noOfChild, testData.noOfInfant, testData.flightClass)
                cy.flightForm1(testData.title1, testData.surname1, testData.fname1, testData.dob1, testData.gender1, testData.nationality1, testData.DocType1, testData.DocNumber1, testData.DocExpDate1, testData.note)
                cy.flightForm2(testData.title2, testData.surname2, testData.fname2, testData.dob2, testData.gender2, testData.nationality2, testData.DocType2, testData.DocNumber2, testData.DocExpDate2)
            }
            else
            {
                cy.flightOnewayBookingMytmTravels(testData.departure, testData.arrival, testData.depDate, testData.noOfAdult, testData.noOfChild, testData.noOfInfant, testData.flightClass)
                cy.flightForm1(testData.title1, testData.surname1, testData.fname1, testData.dob1, testData.gender1, testData.nationality1, testData.DocType1, testData.DocNumber1, testData.DocExpDate1, testData.note)
                cy.flightForm2(testData.title2, testData.surname2, testData.fname2, testData.dob2, testData.gender2, testData.nationality2, testData.DocType2, testData.DocNumber2, testData.DocExpDate2)
                cy.flightForm3(testData.title3, testData.surname3, testData.fname3, testData.dob3, testData.gender3, testData.nationality3, testData.DocType3, testData.DocNumber3, testData.DocExpDate3)
            }

        }
        
    })

})