describe("API Testing Suit", ()=>{



    it("Create User API", ()=>{

        cy.request({
            method: 'POST',
            url:    'https://consumer.barq.com.pk/api/user/create',
            body:{
                        phone : "03101882620",
                        udid : "1111",
                        device_type : "android",
                        user_type : "barq"
            }
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.success).equal(true)
           //cy.log('Success:', response.body.success);
            cy.log(JSON.stringify(response.body, null, 2));

            cy.request({
                method: 'POST',
                url:    'https://consumer.barq.com.pk/api/user/code-verification',
                body:{
                        phone : "03101882620",
                        verification_code : "1290",
                        device_type : "android",
                        device_token : "1111"
                }

            })
            .then((response)=>{
                expect(response.status).equal(200);
                expect(response.body.success).equal(true)
                cy.log(JSON.stringify(response.body, null, 2));
                
                if (response.body.data && response.body.data.token) {
                    cy.log('Token:', response.body.data.token)
                  } 
                else {
                    cy.log('Token is null or undefined');
                  }
                 const mainToken = response.body.data.token
                cy.request({
                    method: 'POST',
                    url:    'https://consumer.barq.com.pk/api/digitt/wallet-to-wallet/title-fetch',
                    body:{
                            amount : "100",
                            receiver_account : "03026858990",
                        },
                    headers:{
                            token: mainToken
                        }
                })
                .then((response)=>{
                expect(response.status).equal(200);
                expect(response.body.success).equal(true)
                cy.log(JSON.stringify(response.body, null, 2));
                
                if ( response.body.data &&  response.body.data.verificationToken) {
                    cy.log('Verification Token:', response.body.data.verificationToken)
                    
                  } 
                else {
                    cy.log('Verification Token is null or undefined');
                  }

                  const vToken = response.body.data.verificationToken
                    cy.request({
                        method: 'POST',
                        url:    'https://consumer.barq.com.pk/api/digitt/wallet-to-wallet/payment',
                        body:{
                                amount : "100",
                                receiver_account : "03026858990",
                                verification_token : vToken, 
                                transaction_pin : "MTYyNTM="
                             },
                        headers:{
                                token: mainToken
                            }
                     })
                    .then((response)=>{
                        expect(response.status).equal(200);
                        expect(response.body.success).equal(true)
                        cy.log(JSON.stringify(response.body, null, 2));
            })

            })

        })

    })
    })
})