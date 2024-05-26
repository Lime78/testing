
import React from 'react';
import Day from './Day';

describe('Day Component', () => {
  it('renders the Day component with items and controls', () => {
    const day = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    const dayName = 'Monday';

    cy.mount(<Day day={day} dayName={dayName} />);

    cy.get('h2').contains('Monday');
    cy.get('.day .item').should('have.length', 2); // Ensure your Item component has a recognizable class or tag
    cy.get('button').contains('Ny uppgift');
  });
});