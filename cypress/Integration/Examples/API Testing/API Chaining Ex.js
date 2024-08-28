describe("API Chaining Suit", ()=>{

    const auth_token = "Bearer c31e85683f600f7d52cd7a13a3886ea55bdcf6fd7b85b35da518323b46ae964b";

    it("CRUD Operations Tests", ()=>{

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body:{
                name: "Zahid Nawaz",
                gender: "male",
                email: Math.random().toString(5).substring(2)+"@gmail.com",
                status: 'inactive'
            },
            headers:{
                Authorization: auth_token
            }
        })
        .then((response)=>{
            expect(response.status).to.equal(201)
            const userID = response.body.id

            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userID}`,
                body:{
                    name: 'Zahid Nawaz Bhatti',
                    status: 'active'

                },
                headers:{
                    Authorization: auth_token
                }

            })
            .then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal('Zahid Nawaz Bhatti')

                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${userID}`,
                    headers:{
                        Authorization: auth_token
                    }

                })
                .then((response)=>{
                    expect(response.status).to.equal(204)
                })
            })
        })
    })



})