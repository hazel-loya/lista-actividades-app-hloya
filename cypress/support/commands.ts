/// <reference types="cypress" />
import {e2e} from '../support/constants';
declare global{
    namespace Cypress{
        interface Chainable{
            validacionInicial():Chainable<void>
            agregarActividad(valor:string):Chainable<void>
            validarEdicion():Chainable<void>
        }
    }
}
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('validacionInicial', () => {
    cy.get(e2e.TITULO_PRINCIPAL).should('contain','Lista de Actividades');
    cy.get(e2e.SUBTITULO).should('contain','Agregar Actividad');
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD)
      .should('be.visible')
      .and('attr','value','');
    cy.get(e2e.BOTON_AGREGAR)
      .should('be.visible')
      .should('has.css','background-color','rgb(40, 167, 69)');
 })

 Cypress.Commands.add('agregarActividad',(valor)=>{
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type(valor);
    cy.get(e2e.BOTON_AGREGAR).click();
    //cy.get('[data-cy=" LhwVK5"]').should('have.text', valor);
    cy.get('[data-cy=" LhwVK10"]').should('be.visible');
    cy.get('[data-cy=" LhwVK11"]').should('be.visible');
 }) 

 Cypress.Commands.add('validarEdicion',()=>{
    cy.get('[data-cy=" LhwVK6"]').should('be.visible');
    cy.get('[data-cy=" LhwVK8"]').should('be.visible');
    cy.get('[data-cy=" LhwVK7"]').should('be.enabled');
 }) 