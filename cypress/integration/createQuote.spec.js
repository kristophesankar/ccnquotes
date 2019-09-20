/* globals describe, cy, it, before */

describe('Create Quote', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should go to create quote page', () => {
    cy.get('.createLink').click()
    cy.url().should('eq', 'http://localhost:3000/create')
  })

  it('Should get form inputs', () => {
    cy.get('#formQuote')
    cy.get('#formQuoteAuthor')
    cy.get('#formQuoteSource')
    cy.get('.submitButton')
    cy.get('.backButton')
  })

  it('Should notify users on incorrect form input', () => {
    cy.get('.submitButton').click()
    cy.get('.Toaster__alert')
  })

  it('Should go to quote on create', () => {
    cy.get('#formQuote').type('This is a test quote')
    cy.get('#formQuoteAuthor').type('Kristophe Sankar')
    cy.get('#formQuoteSource').type('http://thisisasource.com')
    cy.get('.submitButton').click()
    cy.url().should('include', 'http://localhost:3000/quote/')
  })
})
