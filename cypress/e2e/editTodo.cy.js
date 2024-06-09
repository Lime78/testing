describe('Edit Todo Item', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1224');
      cy.get('.item').as('todoItems');
    });
  
    it('should edit a todo item successfully', () => {

      cy.get('@todoItems').first().within(() => {
        cy.get('span[title="Ändra"]').click();
      });

      cy.get('@todoItems').first().within(() => {
        cy.get('input[type="text"]').clear().type('Updated Todo Item').blur();
      });
  

      cy.get('@todoItems').first().within(() => {
        cy.root().then((root) => {
          console.log('After edit:', root.html());
        });
      });
  
      cy.get('@todoItems').first().within(() => {
        cy.get('input[type="text"]').should('not.exist');
        cy.get('label').should('contain.text', 'Updated Todo Item');
      });
    });
  });
  