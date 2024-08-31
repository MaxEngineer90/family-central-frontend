describe('purchase-manager-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Family-Central', () => {
    cy.get('[data-cy="headline"]').should('be.visible');
    cy.get('[data-cy="headline"]').contains('Family-Central');
  });
});
