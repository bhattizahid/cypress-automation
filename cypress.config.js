const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '7c7fti',
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    specPattern: './cypress/e2e/api_testing/**/*{js,jsx,ts,tsx}',
    experimentalStudio: true,
    pageLoadTimeout: 90000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      // If you have any existing event listeners, include them here

      // Example of an event listener:
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log('Browser is about to launch:', browser.name);
        // Modify launch options if needed
        return launchOptions;
      });
    },
  },
});

