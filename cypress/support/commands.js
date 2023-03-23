// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    cy.requset('POST', `${Cypress.env('http://zero.webappsecurity.com')}/login.html`,{
        username: email,
        password,
    })
    .then((Response)=> {
        cy.setCookie('sessionId', Response.body.sessionId)
        cy.setCookie('userId', Response.body.userId)
        cy.setCookie('userName', Response.body.userName)
        cy.visit('/#!/main')
    })

})


Cypress.Commands.add(
    "loginByApi",
    (username, password = Cypress.env("defaultPassword")) => {
      return cy.request("POST", `${Cypress.env("https://admin:admin@the-internet.herokuapp.com")}/basic_auth`, {
        username,
        password,
      })
    }
  )