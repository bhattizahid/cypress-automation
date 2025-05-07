describe("API Testing Suite", () => {
    let mainToken; // Store the token globally
    let vToken; // Store verification token globally
    let IBFTvToken; // Store IBFT verification token globally
    let UtilityToken; // Store IBFT verification token globally
    const baseUrl = Cypress.config("baseUrl"); // Store base URL once
  
    before(() => {
      cy.request({
        method: "POST",
        url: `${baseUrl}/user/create`, // Use the variable
        body: {
          phone: Cypress.env("phone"),
          udid: Cypress.env("device_udid"),
          device_type: Cypress.env("device_type"),
          user_type: "barq",
        },
      }).then((response) => {
        if (response.body.errors && response.body.errors.length > 0) {
          cy.log("❌ Errors:", JSON.stringify(response.body.errors, null, 2));
        }
        expect(response.status).to.equal(200);
        expect(response.body.success).to.be.true;
        cy.log("Create User Response:", JSON.stringify(response.body, null, 2));
        cy.log(`Create User API Response Time: ${response.duration}ms`);
        cy.log("User Created Successfully");
      });
    });
  
    it("Verify OTP & Get Token", () => {
      cy.request({
        method: "POST",
        url: `${baseUrl}/user/code-verification`,
        body: {
          phone: Cypress.env("phone"),
          verification_code: Cypress.env("verification_code"),
          device_type: Cypress.env("device_type"),
          device_token: "1111",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.success).to.be.true;
        cy.log("Create User Response:", JSON.stringify(response.body, null, 2));
        cy.log(`Code Verification API Response Time: ${response.duration}ms`);
        cy.log("OTP Verified Successfully");
  
        mainToken = response.body.data.token; // Store the token
      });
    });
    it("Verify MPIN", () => {
      cy.wrap(mainToken).as("mainToken"); // Store token before using
  
      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/wallet/verify-mpin`,
          body: {
            mpin: Cypress.env("transaction_pin"),
            device_token: "1111",
         },
          headers: { token },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.success).to.be.true;
          cy.log("MPIN Verification Response:", JSON.stringify(response.body, null, 2));
          cy.log(`MPIN Verification API Response Time: ${response.duration}ms`);
          cy.log("MPIN Verified Successfully");
      });
    });
  });

    it.skip("Check Account", function () {
      cy.wrap(mainToken).as("mainToken"); // Store token before using
  
      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/api/digitt/account/check`, // Use the variable
          body: {
            cnic_issue_date: Cypress.env("CNIC_Issue_Date"),
            cnic: Cypress.env("CNIC_NO"),
          },
          headers: { token },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.success).to.be.true;
          cy.log("Check Account Response:", JSON.stringify(response.body, null, 2));
          cy.log(`Check Account API Response Time: ${response.duration}ms`);
          cy.log("Check Account Successfully");
  
          vToken = response.body.data.verificationToken; // Store verification token
        });
      });
    });
  
    it("Fetch Wallet Title", function () {
      cy.wrap(mainToken).as("mainToken"); // Store token before using
  
      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/wallet-to-wallet/title-fetch`, // Use the variable
          body: {
            amount: "100",
            receiver_account: Cypress.env("receiver_account"),
          },
          headers: { token },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.success).to.be.true;
          cy.log("Create User Response:", JSON.stringify(response.body, null, 2));
          cy.log(`Title Fetch API Response Time: ${response.duration}ms`);
          cy.log("Wallet Title Fetched Successfully");
  
          vToken = response.body.data.verificationToken; // Store verification token
        });
      });
    });
  
    it("Make Wallet Payment", function () {
      cy.wrap(mainToken).as("mainToken");
      cy.wrap(vToken).as("vToken");
  
      cy.get("@mainToken").then((token) => {
        cy.get("@vToken").then((verificationToken) => {
          cy.request({
            method: "POST",
            url: `${baseUrl}/digitt/wallet-to-wallet/payment`, // Use the variable
            body: {
              amount: "100",
              receiver_account: Cypress.env("receiver_account"),
              verification_token: verificationToken,
              transaction_pin: Cypress.env("transaction_pin"),
            },
            headers: { token },
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("Create User Response:", JSON.stringify(response.body, null, 2));
            cy.log(`Wallet Payment API Response Time: ${response.duration}ms`);
            cy.log("Wallet Payment Successful");
          });
        });
      });
    });
    
    it("Get Bank List", function(){
        cy.wrap(mainToken).as("mainToken"); // Store token before using

      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/ibft/bank-list`, // Use the variabl
            body: {
                offset: Cypress.env("offset"),
                limit: Cypress.env("limit")
            },
            headers: { token },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("Get Bank List:", JSON.stringify(response.body, null, 2));
            cy.log(`Get Bank List API Response Time: ${response.duration}ms`);
            cy.log("Get Bank List fetch Successful");
    });
  });
});
    it("Get Purpose of List", function(){
        cy.wrap(mainToken).as("mainToken"); // Store token before using

      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/ibft/purpose-list`, // Use the variabl
    
            headers: { token },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("Get Purpose of List", JSON.stringify(response.body, null, 2));
            cy.log(`Get Purpose of List API Response Time: ${response.duration}ms`);
            cy.log("Get Purpose of List fetch Successful");
    });
  });
});
    it("Fetch IBFT Title", function () {
      cy.wrap(mainToken).as("mainToken"); // Store token before using
  
      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/ibft/title-fetch`, // Use the variable
          body: {
            receiver_account: Cypress.env("IBFT_receiver_account"),
            amount: "100",
            bank_id: Cypress.env("IBFT_bank_id"),
            purpose_id: Cypress.env("IBFT_purpose_id")
          },
          headers: { token },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.success).to.be.true;
          cy.log("Fetch IBFT Title Response:", JSON.stringify(response.body, null, 2));
          cy.log(`Fetch IBFT Title API Response Time: ${response.duration}ms`);
          cy.log("IBFT Title Fetched Successfully");
  
          vToken = response.body.data.verificationToken; // Store verification token
        });
      });
    });
     it("IBFT Transfer Validation", function(){
        cy.wrap(mainToken).as("mainToken"); // Store token before using

      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/ibft/ibft-transfer-validation`, // Use the variabl
          body: {
            transaction_pin: Cypress.env("transaction_pin")
          },
          
            headers: { token },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("Get Purpose of List", JSON.stringify(response.body, null, 2));
            cy.log(`Get Purpose of List API Response Time: ${response.duration}ms`);
            cy.log("Get Purpose of List fetch Successful");
            

            IBFTvToken = response.body.data.detail.verificationToken; // Store IBFT verification token
    });
  });
});
    it("Make IBFT Payment", function () {
      cy.wrap(mainToken).as("mainToken");
      cy.wrap(IBFTvToken).as("IBFTvToken");
  
      cy.get("@mainToken").then((token) => {
        cy.get("@IBFTvToken").then((verificationToken) => {
          cy.request({
            method: "POST",
            url: `${baseUrl}/digitt/ibft/payment`, // Use the variable
            body: {
              beneficiary_bank: Cypress.env("IBFT_beneficiary_bank"),
              amount: "100",
              beneficiary_title: Cypress.env("IBFT_beneficiary_title"),
              purpose_id: Cypress.env("IBFT_purpose_id"),
              verification_token: verificationToken,
              receiver_account: Cypress.env("IBFT_receiver_account"),
              bank_id: Cypress.env("IBFT_bank_id"),
              relation_lov_id: "3",
            },
            headers: { token },
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("IBFT Payment Response:", JSON.stringify(response.body, null, 2));
            cy.log(`IBFT Payment API Response Time: ${response.duration}ms`);
            cy.log("IBFT Payment Successful");
          });
        });
      });
    });
    it("Get Company List", function(){
      cy.wrap(mainToken).as("mainToken"); // Store token before using
  
      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/bill-payment/company-list`, // Use the variable
            body: {
                offset: Cypress.env("offset"),
                limit: Cypress.env("limit")
            },
            headers: { token },
        }).then((response) => {

            expect(response.status).to.equal(200);
            if (response.body.success == true){
              expect(response.body.success).to.be.true;
            }
            if (response.body.errors && response.body.errors.length > 0) {
              cy.log("❌ Errors:", JSON.stringify(response.body.errors, null, 2));
            }
            cy.log("Get Company List:", JSON.stringify(response.body, null, 2));
            cy.log(`Get Company List API Response Time: ${response.duration}ms`);
            cy.log("Get Company List fetch Successful");
    });
  });
});
      it("Fetch Utility Title", function () {
      cy.wrap(mainToken).as("mainToken"); // Store token before using
  
      cy.get("@mainToken").then((token) => {
        cy.request({
          method: "POST",
          url: `${baseUrl}/digitt/bill-payment/title-fetch`, // Use the variable
          body: {
            biller_id: Cypress.env("biller_id"),
            consumer_number: Cypress.env("bill_consumer_no"),
          },
          headers: { token },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.success).to.be.true;
          cy.log("Utility Title Fetch Response:", JSON.stringify(response.body, null, 2));
          cy.log(`Utility Title Fetch API Response Time: ${response.duration}ms`);
          cy.log("Utility Title Fetched Successfully");
  
          UtilityToken = response.body.data.verificationToken; // Store verification token
        });
      });
    });

    it("Make Utility Payment", function () {
      cy.wrap(mainToken).as("mainToken");
      cy.wrap(UtilityToken).as("UtilityToken");
  
      cy.get("@mainToken").then((token) => {
        cy.get("@UtilityToken").then((verificationToken) => {
          cy.request({
            method: "POST",
            url: `${baseUrl}/digitt/bill-payment/pay`, // Use the variable
            body: {
              consumer_name: Cypress.env("IBFT_beneficiary_bank"),
              amount: "100",
              biller_id: Cypress.env("biller_id"),
              bill_month: Cypress.env("bill_month"),
              consumer_number: Cypress.env("bill_consumer_no"),
              verification_token: verificationToken,
              transaction_pin: Cypress.env("transaction_pin"),
            },
            headers: { token },
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("IBFT Payment Response:", JSON.stringify(response.body, null, 2));
            cy.log(`IBFT Payment API Response Time: ${response.duration}ms`);
            cy.log("IBFT Payment Successful");
          });
        });
      });
    });
});
  

  