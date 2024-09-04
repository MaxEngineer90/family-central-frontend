describe('app-chooser', () => {
  beforeEach(() => cy.visit('/'));

  it('should render app purchase-manger', () => {
    cy.get('[data-cy="toggle-panel"]').should('be.visible');
    cy.get('[data-cy="toggle-panel"]').click();
    cy.get('[data-cy="app-option"]').contains('einkauf-verwalten').click();
    cy.get('fcf-auto-complete').should('be.visible');
  });

  it('should match the previous screenshot', () => {
    cy.matchImageSnapshot('snap-from-app', {
      snapFilenameExtension: '-1',
    });
  });
});
