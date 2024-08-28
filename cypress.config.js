const { defineConfig } = require("cypress");

export default defineConfig({
  projectId: '7c7fti',
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    

    specPattern: 'cypress/integration/examples/api_testing/*.js'
  
  },
  
});
