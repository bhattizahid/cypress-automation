/// <reference types="Cypress" />

describe('Login session persistence with cookies', () => {

    before(() => {
      // Login manually once to save cookies
      cy.visit('https://visa.vfsglobal.com/pak/en/jpn/login');
  
      // Wait and manually solve CAPTCHA, then enter credentials
      cy.pause(); // 👈 Pauses test so you can login manually once
  
      // After login completes, save cookies
      cy.getCookies().then((cookies) => {
        cookies.forEach((cookie) => {
          Cypress.Cookies.preserveOnce(cookie.name);
        });
      });
    });
  
    it('Visits dashboard using saved cookies', () => {
      // Restore cookies to stay logged in
      cy.visit('https://visa.vfsglobal.com/pak/en/jpn/dashboard'); // or whatever the URL is after login
  
      // Example assertion after login
      cy.contains('Welcome').should('exist');
    });
  
  });
  