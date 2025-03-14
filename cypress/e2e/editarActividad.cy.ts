import {e2e} from '../support/constants';

describe('Editar una actividad', () => {
  it('Verifica que se pueda editar una actividad existente', () => {
    // Visitar la pagina principal
    cy.visit('/')
    cy.validacionInicial();
    //Agregar Actividad
    cy.agregarActividad('Primera Actividad')
    
      //Editar Actividad
    cy.get('[data-cy=" LhwVK10"]').click();
    cy.validarEdicion();
    cy.get('[data-cy=" LhwVK7"]').clear()
    .type('Nueva Actividad');
    cy.get('[data-cy=" LhwVK8"]').click();
    
    cy.get('[data-cy=" LhwVK5"]').should('have.text','Nueva Actividad');
      
  })
})