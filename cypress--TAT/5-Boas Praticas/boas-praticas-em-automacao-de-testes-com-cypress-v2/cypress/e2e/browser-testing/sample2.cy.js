describe('Browser testing bad practice - anchor with target _blank', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('directs the user to the privacy page after removing the target and clicking the link', () => {
    // cy.contains('a', 'Política de Privacidade')
    //   .invoke('removeAttr', 'target')
    //   .click()
    // cy.url()
    //   .should('be.equal', 'https://cac-tat.s3.eu-central-1.amazonaws.com/privacy.html')

    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', '/privacy.html')
      .and('have.attr', 'target', '_blank')
  })
})
