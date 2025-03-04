const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '7c7fti',
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'https://consumer.barq.com.pk/api', // Set base API URL
    specPattern: './cypress/e2e/api_testing/**/*{js,jsx,ts,tsx}',
    experimentalStudio: true,
    pageLoadTimeout: 90000,
    retries: { runMode: 0, openMode: 0 },
    env: {  // Environment variables for reusability
      phone: "03026858990",
      device_udid: "1111",
      device_type: "android",
      verification_code: "1290",
      receiver_account: "03101882620",
      transaction_pin: "NzcwMDc=",
      offset : "0",
      limit : "100",
      IBFT_receiver_account: "03458721870",
      IBFT_bank_id: "104",
      IBFT_purpose_id: "16",
      IBFT_beneficiary_bank: "Easypaisa Telenor Microfinance Bank",
      IBFT_beneficiary_title: "ZAHID NAWAZ BHATTI",
      bill_consumer_no: "4770520047974917",
      biller_id: "668",
      bill_consumer_name: "MUHAMMAD ROHAIL",
      bill_month: "June",
      
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Enable Mochawesome reporter
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter', // Use Mochawesome for reporting
  reporterOptions: {
    reportDir: 'cypress/reports', // Reports directory
    overwrite: false,
    html: true,
    json: true
  }
});
