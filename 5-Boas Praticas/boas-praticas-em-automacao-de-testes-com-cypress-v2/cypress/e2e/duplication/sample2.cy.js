describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  it('searches for "reactjs"', () => {
    // cy.get('@searchField')
    //   .type('reactjs{enter}')
    cy.search('reactjs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  it('searches for "vuejs"', () => {
    // cy.get('@searchField')
    //   .type('vuejs{enter}')
    cy.search('vuejs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  // Exercício extra 2
  const array = ['reactjs', 'vuejs', 'Linux'];
  it('search for itens in array', () => {
    array.forEach((term) => {
      cy.search(term)

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    })
  });

  // Resolução de Walmyr
  array.forEach(term => {
    it(`search for "${term}" - Walmyr`, () => {
      cy.search(term)

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    });
  })

})
