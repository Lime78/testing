import { useStore } from '../../data/store';
import Item from './Item';

import React from 'react';

describe('Item Component', () => {
    const item = { id: 1, text: 'Test Todo', done: false, late: false };
  
    beforeEach(() => {
      useStore.setState({
        todos: [item],
        deleteTodo: cy.stub().as('deleteTodo'),
        editTodo: cy.stub().as('editTodo'),
      });
  
      cy.mount(<Item item={item} />);
    });
  
    it('should allow editing the item text', () => {
      cy.get('span[title="Ändra"]').click();
      cy.get('input[type="text"]').should('be.visible').and('not.be.disabled').clear().type('Updated Todo{enter}');
    });
  
    it('should delete the item when delete button is clicked', () => {
      cy.get('span[title="Ta bort"]').click();
      cy.get('@deleteTodo').should('have.been.calledWith', item.id);
    });
  });