describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1',{timeout:10_000}).should('contain','Lista de Actividades');
    cy.contains('Agregar').click();
  })
})