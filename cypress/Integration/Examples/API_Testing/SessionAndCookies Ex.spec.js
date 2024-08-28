describe("Session and Cookies Suit", ()=>{

    let authToken = null;

    before("Creating Access Token", ()=>{

        cy.request({
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/api-clients/',
                headers: {
                    'Content-Type': 'application/json'
                },

                body:{
                    clientName: 'Xint Solutions',
                    clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
                }
        }).then((response)=>{
            authToken = response.body.accessToken;

        });
    });

    it("Creating  new Order", ()=>{

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            body:{
                "bookId": 1,
                "customerName": "Zahid"
            }
        }).then((response) =>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
        });
    });

    it("Fetching the orders", ()=>{

        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            cookies:{
                'cookieName': 'mycookie'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        })
    })

})