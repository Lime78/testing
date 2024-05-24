import { useStore } from '../../data/store';
import PrioList from './PrioList';
import React from 'react';

describe('PrioList Component', () => {
    const todos = [
      { id: 1, text: 'Task 1', done: false },
      { id: 2, text: 'Task 2', done: true },
      { id: 3, text: 'Task 3', done: false },
    ];
  
    beforeEach(() => {
      useStore.setState({
        todos: todos,
        searchText: '',
        setSearchText: cy.stub().as('setSearchText'),
      });
  
      cy.mount(<PrioList />);
    });
      

  it('should call setSearchText when input value changes', () => {
    cy.get('input[type="search"]').type('Task 1').should('have.value', 'Task 1');
    cy.get('@setSearchText').should('have.been.calledWith', 'Task 1');
  });

    it('should render priority items based on filtered todos', () => {
      cy.get('.prio-items').children().should('have.length', 2);
    });
  
  });


  