/* globals describe, cy, it, before */

describe('View Quotes', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Visit first ten quotes from db and check elements', () => {
    cy.wait(3000)
    cy.get('#quoteListColumn')
      .children()
      .children()
      .each(($el, index, $list) => {
        cy.visit(`http://localhost:3000/quote/${index + 1}`)
        cy.get('#formQuote').should('not.have.value', '')
        cy.get('#formQuoteAuthor').should('not.have.value', '')
        cy.get('#formQuoteSource').should('not.have.value', '')
        cy.get('.backButton')
        cy.get('.toggleButton')
        cy.get('.updateButton')
      })
  })
})

describe('Create,Update, Delete a Quote', () => {
  before(() => {
    cy.visit('http://localhost:3000/create/')
  })

  it('Should create a quote', () => {
    cy.get('#formQuote').type('This is a test quote')
    cy.get('#formQuoteAuthor').type('Kristophe Sankar')
    cy.get('#formQuoteSource').type('http://thisisasource.com')
    cy.get('.submitButton').click()
  })

  it('Should have saved quote values', () => {
    cy.wait(500)
    cy.get('#formQuote').should('have.value', 'This is a test quote')
    cy.get('#formQuoteAuthor').should('have.value', 'Kristophe Sankar')
    cy.get('#formQuoteSource').should('have.value', 'http://thisisasource.com')
  })

  it('Should update a quote', () => {
    cy.get('.toggleButton').click()
    cy.get('#formQuote').type('This is a test quote. Updated')
    cy.get('#formQuoteAuthor').type('Kristophe Sankar. Updated')
    cy.get('#formQuoteSource').type('http://thisisasource.com.updated')
    cy.get('.updateButton').click()
  })

  it('Should have new quote values', () => {
    cy.wait(500)
    cy.get('#formQuote').should('have.value', 'This is a test quoteThis is a test quote. Updated')
    cy.get('#formQuoteAuthor').should('have.value', 'Kristophe SankarKristophe Sankar. Updated')
    cy.get('#formQuoteSource').should('have.value', 'http://thisisasource.comhttp://thisisasource.com.updated')
  })

  it('Should delete a quote', () => {
    cy.get('.deleteButton').click()
    cy.go('back')
    cy.get('.noResource').should('have.text', 'The requested resource does not exist.')
  })
})
