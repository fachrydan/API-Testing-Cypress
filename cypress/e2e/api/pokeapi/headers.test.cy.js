describe('Validate Header', () => {

    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('headers').its('cache-control').should('include', 'public, max-age=86400, s-maxage=86400')

        cy.get('@pokemon').its('body').should('include', {name:'ditto'})
        cy.get('@pokemon').its('body').should('include', {order:214})

    });

});