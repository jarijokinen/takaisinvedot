describe('The home page', () => {
  it('loads succesfully', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Takaisinvedot.fi');
    cy.get('body').should('contain', 'Ladataan...');
    cy.get('body').should('contain', 'Tukes');
  });
});
