/// <reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('successfully', () => {
        cy.logout()

        cy.contains('Sign in').should('be.visible')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})
