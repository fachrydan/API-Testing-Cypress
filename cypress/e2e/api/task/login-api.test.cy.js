describe('Basic Auth', function() {

    it('Successfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')

    });

    it('Successfully login by appending username and password login via API', () => {

        cy.loginViaAPI();

    });


});