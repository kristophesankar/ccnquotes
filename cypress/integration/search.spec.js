/* globals describe, cy, it, before */

describe('View Quotes', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Search should give the correct result', () => {
    cy.wait(500)
    cy.get('nav').find('.searchBar').type('delete')
    cy.wait(600) /* Wait for debounce */
    cy.get('#quoteList')
      .children()
      .each(($el, index, $list) => {
        cy.get($el).should('have.class', 'card')
        cy.get($el)
          .children()
          .should('have.class', 'card-body')
        cy.get($el)
          .children()
          .find('p').should('have.text', 'Deleted code is debugged code.') // Should have preview text
        cy.get($el)
          .children()
          .find('.navIcon') // Should have edit button
      })
  })
})
