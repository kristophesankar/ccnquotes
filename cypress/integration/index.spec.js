describe('CCNotes Quotes', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('Renders', () => {
    cy.get('h1').contains('CCN Quotes');
  });
});
