describe("API Testing Suite", () => {

    it("Create User, Verify Code, Fetch Title, and Make Payment", () => {

        // Step 1: Create User API
        cy.request({
            method: 'POST',
            url: 'https://consumer.barq.com.pk/api/user/create',
            body: {
                phone: "03101882620",
                udid: "1111",
                device_type: "android",
                user_type: "barq"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("Create User Response:", JSON.stringify(response.body, null, 2));

            // Step 2: Code Verification API
            return cy.request({
                method: 'POST',
                url: 'https://consumer.barq.com.pk/api/user/code-verification',
                body: {
                    phone: "03101882620",
                    verification_code: "1290",
                    device_type: "android",
                    device_token: "1111"
                }
            });
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.success).to.be.true;
            cy.log("Code Verification Response:", JSON.stringify(response.body, null, 2));

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
                url: 'https://consumer.barq.com.pk/api/digitt/wallet-to-wallet/title-fetch',
                body: {
                    amount: "100",
                    receiver_account: "03026858990",
                },
                headers: {
                    token: this.mainToken // Retrieve stored token
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.success).to.be.true;
                cy.log("Title Fetch Response:", JSON.stringify(response.body, null, 2));

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
                url: 'https://consumer.barq.com.pk/api/digitt/wallet-to-wallet/payment',
                body: {
                    amount: "100",
                    receiver_account: "03026858990",
                    verification_token: this.vToken,
                    transaction_pin: "MTYyNTM="
                },
                headers: {
                    token: this.mainToken
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.success).to.be.true;
                cy.log("Payment Response:", JSON.stringify(response.body, null, 2));
            });
        });
    });
});
