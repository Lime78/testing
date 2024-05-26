import React from 'react';
import  Footer  from './Footer';

describe('Footer Component', () => {
  it('renders the Footer with the correct date and text', () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'long',
    });

    cy.mount(<Footer />);

    cy.get('footer').within(() => {
      cy.contains(`Idag är det: ${formattedDate}`);
      cy.contains('Studieguide | 2024');
    });
  });
});