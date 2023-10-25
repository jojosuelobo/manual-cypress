Cypress._.times(5, function() {
    it('testa a página da política de privavidade de forma independente', function() {
      cy.visit('./src/privacy.html')
  
      cy.contains('Talking About Testing').should('be.visible')
    })
  })

// Documentação Lodesh: https://lodash.com/docs/4.17.15