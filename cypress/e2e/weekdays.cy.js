// cypress/integration/dayComponent.spec.js

const dayNames = [
  'måndag',
  'tisdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lördag',
  'söndag',
];

describe('Day component', () => {
  it('should render days in correct order with correct names', () => {
    cy.visit('http://localhost:1224/');


    cy.get('main').should('exist');

    
    cy.get('.day-view').should('exist');
    cy.get('.day-view .day').should('have.length', dayNames.length);

    
    cy.get('.day-view .day').each(($day, index) => {
      cy.wrap($day).within(() => {
        cy.get('h2').should('contain', dayNames[index]);
      });
    });
  });
});
