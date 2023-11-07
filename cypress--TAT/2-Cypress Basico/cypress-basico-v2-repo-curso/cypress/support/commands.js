Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('[id="firstName"]').as('nome').type('Josue')
    cy.get('[id="lastName"]').as('sobrenome').type('Lobo')
    cy.get('[id="email"]').as('email').type('josuelobo@email.com')
    cy.get('[id="open-text-area"]').as('text').type('lorem')
    cy.get('[type="submit"]').click()
})