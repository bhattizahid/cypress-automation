describe("API Testing Suite", () => {

    it("Create User, Verify Code, Fetch Title, and Make Payment", function () {

        const baseUrl = Cypress.config('baseUrl'); // Get base URL from config

        // Step 1: Create User API
        cy.request({
            method: 'POST',
            url: `${baseUrl}/user/create`,
            body: {
                phone: Cypress.env('phone'),
                udid: Cypress.env('device_udid'),
                device_type: Cypress.env('device_type'),
                user_type: "barq"
            }
        }).then((response) => {
            cy.log("Create User Response:", JSON.stringify(response.body, null, 2));
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log(`Create User API Response Time: ${response.duration}ms`);
            

            // Step 2: Code Verification API
            return cy.request({
                method: 'POST',
                url: `${baseUrl}/user/code-verification`,
                body: {
                    phone: Cypress.env('phone'),
                    verification_code: Cypress.env('verification_code'),
                    device_type: Cypress.env('device_type'),
                    device_token: Cypress.env('device_udid')
                }
            });
        }).then((response) => {
            cy.log("Code Verification Response:", JSON.stringify(response.body, null, 2));
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log(`Code Verification API Response Time: ${response.duration}ms`);
            

            // Store token if available
            if (response.body.data && response.body.data.token) {
                cy.wrap(response.body.data.token).as('mainToken'); // Store token for later use
            } else {
                throw new Error("Token is missing in response");
            }

        }).then(function () {
            // Step 3: Fetch Wallet-to-Wallet Title API
            cy.request({
                method: 'POST',
                url: `${baseUrl}/digitt/wallet-to-wallet/title-fetch`,
                body: {
                    amount: "100",
                    receiver_account: Cypress.env('receiver_account'),
                },
                headers: {
                    token: this.mainToken // Retrieve stored token
                }
            }).then((response) => {
                cy.log("Title Fetch Response:", JSON.stringify(response.body, null, 2));
                expect(response.status).to.equal(200);
                expect(response.body.success).to.be.true;
                cy.log(`Title Fetch API Response Time: ${response.duration}ms`);
                

                // Store verificationToken if available
                if (response.body.data && response.body.data.verificationToken) {
                    cy.wrap(response.body.data.verificationToken).as('vToken');
                } else {
                    throw new Error("Verification Token is missing in response");
                }
            });
        }).then(function () {
            // Step 4: Wallet-to-Wallet Payment API
            cy.request({
                method: 'POST',
                url: `${baseUrl}/digitt/wallet-to-wallet/payment`,
                body: {
                    amount: "100",
                    receiver_account: Cypress.env('receiver_account'),
                    verification_token: this.vToken,
                    transaction_pin: Cypress.env('transaction_pin')
                },
                headers: {
                    token: this.mainToken
                }
            }).then((response) => {
                cy.log("Payment Response:", JSON.stringify(response.body, null, 2));
                expect(response.status).to.equal(200);
                expect(response.body.success).to.be.true;
                cy.log(`FT Payment API Response Time: ${response.duration}ms`);
                
            });
        });
    });
});
