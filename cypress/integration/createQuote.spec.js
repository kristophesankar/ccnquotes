describe("Create Quote", () => {
  before(() => {
    cy.visit("http://localhost:3000")
  })

  it("Should go to create quote page", () => {
    cy.get(".createLink").click()
    cy.url().should('eq', 'http://localhost:3000/create')
  })
})