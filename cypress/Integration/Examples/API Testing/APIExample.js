/// <reference types="Cypress" />


describe('API Testing Suit', () => {
    it('API Testing Example', () => {
      
cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2'
}).then((response)=>{
    console.log(response);
    cy.log(JSON.stringify(response));
    expect(response.status).to.eq(200);
})
    
    })
  })