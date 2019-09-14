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
    cy.get("h1").contains("All Quotes")
  })

  it("Should show QuoteList container", () => {
    cy.get("#quoteListColumn")
  })

  it("Should render QuoteList items or placeholders", () => {
    cy.get("#quoteListColumn")
      .children()
      .find(".quoteListItem")
  })

  it("Should show QuoteList Card content", () => {
    cy.get("#quoteListColumn")
      .children()
      .children()
      .each(($el, index, $list) => {
        cy.get($el).should("have.class", "card")
        cy.get($el)
          .children()
          .should("have.class", "card-body")
        cy.get($el)
          .children()
          .find("p") // Should have preview text
        cy.get($el)
          .children()
          .find("button") // Should have preview button
      })
  })

  it("Should show QuoteCard", () => {
    cy.get("#quoteCard")
  })

  it("Should show QuoteCard body", () => {
    expect(cy.get("#entryBody")).to.not.equal("undefined")
  })

  it("Should show QuoteCard Author", () => {
    expect(cy.get("#entryAuthor")).to.not.equal("undefined")
  })

  it("Should show QuoteCard Source", () => {
    expect(cy.get("#entrySource")).to.not.equal("undefined")
  })
})
