describe('Create New User & Validate Name Value', () => {
    
    it('Succesfully created new user', () => {
        var newUser = {
            "name": "Fachrydan",
            "job": "Software Tester"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', newUser).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.eq(newUser.name)
            expect(response.body.job).to.eq(newUser.job)
        })

    })
})