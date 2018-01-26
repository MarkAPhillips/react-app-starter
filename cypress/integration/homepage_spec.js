describe('When an User visits the home page', () => {
  it('should load the homepage content', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Todo List');
    cy.get('input').should('be.visible');
    cy.get('button').contains('Add');
  });
});
