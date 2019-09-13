describe("CCNotes Quotes", () => {
  before(() => {
    cy.visit("http://localhost:3000")
  })
  it("Renders", () => {
    cy.get("nav").contains("CCN Quotes")
  })
  it("Renders", () => {
    cy.get("div").should("have.class", "container")
  })
  it("Renders", () => {
    cy.get("div.container").children()
  })
})
