describe("Navigation Component", () => {
  before(() => {
    cy.visit("http://localhost:3000")
  })
  it("Should render the NavigationBar", () => {
    cy.get("nav")
  })
  it("Should show the app title", () => {
    cy.get("nav").contains("CCN Quotes")
  })


})

describe("All Quotes Page", () => {
  before(() => {
    cy.visit("http://localhost:3000")
  })
  it("Should show component title", () => {
    cy.get("h1").contains('All Quotes')
  })
  it("Should show QuoteList container", () => {
    cy.get("#quoteListColumn")
  })
  it("Should show QuoteList items", () => {
    cy.get("#quoteListColumn").children()
  })
  it("Should show QuoteList Card content", () => {
    cy.get("#quoteListColumn").children().children().each(($el, index, $list) => {
      cy.get($el).should("have.class", 'card')
      cy.get($el).children().should("have.class", 'card-body')
      cy.get($el).children().find('p') // Should have preview text
      cy.get($el).children().find('button') // Should have preview button
    })
  })
})
