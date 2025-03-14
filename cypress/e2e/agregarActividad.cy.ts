import {e2e} from '../support/constants';

describe('Agregar actividadc', () => {
  it('Verifica que se pueda agregar una nueva actividad a a lista', () => {
    // Visitar la pagina principal
    cy.visit('/')
    cy.validacionInicial();
    
      //Agregar actividad
      cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de prueba');
      cy.get(e2e.BOTON_AGREGAR).click();
      cy.get('[data-cy=" LhwVK5"]').should('have.text','Actividad de prueba');
      cy.get('[data-cy=" LhwVK10"]').should('be.visible');
  })
})