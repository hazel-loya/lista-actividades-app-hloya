import {e2e} from '../support/constants';

describe('Eliminar una actividad', () => {
  it('Verifica que se pueda eliminar una actividad existente', () => {
    // Visitar la pagina principal
    cy.visit('/')
    cy.validacionInicial();
    
    //Agregar actividad
    cy.agregarActividad('Primera Actividad ');

    //Eliminar actividad
    cy.get('[data-cy=" LhwVK11"]').click();
    cy.get('[data-cy=" LhwVK4"]').should('not.exist');
  })
})