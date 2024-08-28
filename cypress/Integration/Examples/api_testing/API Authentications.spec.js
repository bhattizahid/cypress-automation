describe("API Authenication Suit", ()=>{

    it("Basic Authentication", ()=>{

        cy.request({
            method: 'GET',
            url: "https://postman-echo.com/basic-auth",
            auth:{
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })

    it("Digest Authentication", ()=>{

        cy.request({
            method: 'GET',
            url: "https://postman-echo.com/basic-auth",
            auth:{
                username: 'postman',
                password: 'password',
                method: 'digest'
            }

        })
        .then((response)=>{

            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)

        })
    })

    const bToken = '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';
    it("Bearer Token Auth", ()=>{

        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers:{
                Authorization: 'Bearer '+bToken
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })

    })

    it("API key Auth", ()=>{

        cy.request({
            method: 'GET',
            url: "api.openweathermap.org/data/2.5/forecast/daily",
            qs:{
                q: 'Lahore',
                appid: 'ad168b5471eb24aae05729d0cda496ff'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
        })
    })
})