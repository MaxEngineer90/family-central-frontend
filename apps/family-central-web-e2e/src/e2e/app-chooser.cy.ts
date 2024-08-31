describe('app-chooser', () => {
  beforeEach(() => cy.visit('/'));

  it('should render app purchase-manger', () => {
    cy.get('[data-cy="open-panel"]').should('be.visible');
    cy.get('[data-cy="open-panel"]').click();
    cy.get('[data-cy="app-option"]').contains('einkauf-verwalten').click();
    cy.get('lib-purchase-manager').should('be.visible');
  });

  it('should match the previous screenshot', () => {
    cy.matchImageSnapshot('snap-from-app', {
      snapFilenameExtension: '-1',
    });
  });
});
