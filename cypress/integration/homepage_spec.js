describe('When an User visits the home page', () => {
  it('should load the homepage content', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'React Starter App');
  });
});
