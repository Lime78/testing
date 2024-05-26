
const dayNames = [
	'måndag',
	'tisdag',
	'onsdag',
	'torsdag',
	'fredag',
	'lördag',
	'söndag',
]

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1224/')

    //Main test
    cy.get('main').should('exist');
    cy.get('.day-view').should('exist');
    cy.get('.day-view .day').should('have.length.gt', 0);
    cy.get('.day-view .day').each(($day, index) => {
      cy.wrap($day).within(() => {
        cy.get('h2').should('contain', dayNames[index]);
      });
    });
  });
});