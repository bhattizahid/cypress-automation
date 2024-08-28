/// <reference types="Cypress" />


describe('My First Test', () => {
    it('Does not do much!', () => {
      
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        
        cy.wait(2000)

        //cy.get('.products').find('.product').eq(2).contains('+').click()
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) => {

            const textVeg = $e1.find('h4.product-name').text()

            if(textVeg.includes('Cashews'))
            {
                cy.wrap($e1).find('.increment').click()
                cy.wrap($e1).find('button').click()

                cy.get('.cart-icon').click()
                cy.get('button').contains('PROCEED TO CHECKOUT').click()

                cy.get('.amount').contains('1300')
            }

            



        })

    


    })
  })