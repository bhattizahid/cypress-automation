/// <reference types="Cypress" />


describe('UI Test Suite', () => {
    it('Advanced UI Elements', () => {
      
     //Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
//cy.get('#opentab').invoke('removeAttr','target').click()

//cy.wait(6000)
 
//cy.url().should('include', 'rahulshettyacademy')

cy.go('back')
    


    })
  })