/* globals describe, cy, it, before, expect */

describe('Navigation Component', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should render the NavigationBar', () => {
    cy.get('nav')
  })

  it('Should show the App title', () => {
    cy.get('nav').contains('CCN Quotes')
  })

  it('Should show add link', () => {
    cy.get('.createLink')
  })

  it('Should show all quotes link', () => {
    cy.get('.showAllLink')
  })
})

describe('All Quotes Page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should show component title', () => {
    cy.get('h1').contains('All Quotes')
  })

  it('Should show QuoteList container', () => {
    cy.get('#quoteListColumn')
  })

  it('Should render QuoteList items or placeholders', () => {
    cy.get('#quoteListColumn')
      .children()
      .find('.quoteListItem')
  })

  it('Should show QuoteList Card content', () => {
    cy.get('#quoteList')
      .children()
      .each(($el, index, $list) => {
        cy.get($el).should('have.class', 'card')
        cy.get($el)
          .children()
          .should('have.class', 'card-body')
        cy.get($el)
          .children()
          .find('p') // Should have preview text
        cy.get($el)
          .children()
          .find('.navIcon') // Should have edit button
      })
  })

  it('Should show selected QuoteList Card content', () => {
    cy.get('#quoteList')
      .children()
      .each(($el, index, $list) => {
        cy.get($el).should('have.class', 'card')
        cy.get($el)
          .children()
          .should('have.class', 'card-body').click()
        cy.get('#quoteCard')
        expect(cy.get('#entryBody')).to.not.equal('undefined')
        expect(cy.get('#entryAuthor')).to.not.equal('undefined')
        expect(cy.get('#entrySource')).to.not.equal('undefined')
      })
  })
})
