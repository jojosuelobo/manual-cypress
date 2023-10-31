describe('Wrong abstraction bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('uses custom command for assertion just for the sake of reusability', () => {
    cy.search('cypress')
    cy.wait('@getStories')

    //cy.assertResults()
    //cy.get('.table-row').then(rows => { expect(rows.length).to.be.at.least(1) })
    cy.get('.table-row').its('length').should('be.at.least', 1)
  })

  it('uses custom command for assertion just for the sake of reusability', () => {
    cy.search('selenium')
    cy.wait('@getStories')

    //cy.assertResults()
    //cy.get('.table-row').then(rows => { expect(rows.length).to.be.at.least(1) })
    cy.get('.table-row').its('length').should('be.at.least', 1)
  })

  it('uses custom command for assertion just for the sake of reusability', () => {
    cy.search('playwright')
    cy.wait('@getStories')

    //cy.assertResults()
    //cy.get('.table-row').then(rows => { expect(rows.length).to.be.at.least(1) })
    cy.get('.table-row').its('length').should('be.at.least', 1)
  })
})
