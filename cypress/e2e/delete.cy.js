// cypress/integration/itemComponent.spec.js

describe('Item component', () => {
    beforeEach(() => {
      // Besök din applikation innan varje test
      cy.visit('http://localhost:1224/');
    });
  
    it('should delete an item when delete button is clicked', () => {
      // Anta att det finns åtminstone en uppgift att börja med
      cy.get('.item').should('have.length.greaterThan', 0);
  
      // Spara antal uppgifter före borttagning
      cy.get('.item').then($items => {
        const initialLength = $items.length;
  
        // Hitta och klicka på delete-knappen på den första uppgiften
        cy.get('.item').first().within(() => {
          cy.get('span[title="Ta bort"]').click();
        });
  
        // Verifiera att antalet uppgifter har minskat med en
        cy.get('.item').should('have.length', initialLength - 1);
      });
    });
  });
  