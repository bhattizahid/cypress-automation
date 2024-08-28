/// <reference types="Cypress" />

class Login{


    getLoginButton(){
        return cy.get('span').contains('Sign in or Register').click()
    }
    getUserName(){
        return cy.get('#guest_name').type('Zahid')
    }
    getEmail(){
        return cy.get('#guest_email').type('zahid.nawaz@xintsolutions.com')
    }
    getPhoneNo(){
        return cy.get('#guest_phone').type('3026858990')
    }
    getOTPSend(){
        return cy.get('#otp-send').click()
    }

}