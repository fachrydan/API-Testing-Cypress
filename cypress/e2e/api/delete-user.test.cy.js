describe('Delete User', () => {
    
    it('Succesfully deleted user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response.body.data).to.be.eq()
        })
    })
})