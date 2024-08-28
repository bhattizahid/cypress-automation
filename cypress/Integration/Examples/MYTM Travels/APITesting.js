/// <reference types="Cypress" />



describe("API Testing", () => {
    it("Should make an API request and validate the response", () => {

        const requestBody = {
            email: "naina+65@xintsolutions.com",
            password: "1234",
          };
     
        // Use the `cy.request` command to make an API request
        const apiUrl = Cypress.env("apiUrl");
      cy.request({
        method: "POST",
        url: 'https://dev-corporate.mytmdev.com/api/sale-agent-signin', // Replace with your API endpoint URL
        body: requestBody,
      }).then((response) => {
        // Use Cypress assertions to validate the response
        expect(response.status).to.equal(200);
        expect(response.headers).to.have.property("content-type").and.include("application/json");
        expect(response.body).to.have.property("id").to.equal(8087);
        // Add more assertions as needed
      });
    });
  });