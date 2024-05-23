// import Day from './Day';
// import Item from './Item';

// describe('Day Component', () => {
//   const daysOfWeek = [
//     'Söndag',
//     'Måndag',
//     'Tisdag',
//     'Onsdag',
//     'Torsdag',
//     'Fredag',
//     'Lördag'
//   ];

//   const testDay = {
//     index: 1, // Måndag
//     items: [
//       { id: 1, text: 'Test item 1', done: false },
//       { id: 2, text: 'Test item 2', done: true }
//     ]
//   };

//   it('renders the day name correctly', () => {
//     cy.mount(<Day day={testDay} />);
//     cy.get('.day h2').should('contain', daysOfWeek[testDay.index]);
//   });

//   it('renders the items correctly', () => {
//     cy.mount(<Day day={testDay} />);
//     cy.get('.day').within(() => {
//       cy.get(Item).should('have.length', testDay.items.length);
//       testDay.items.forEach(item => {
//         cy.contains(item.text).should('exist');
//       });
//     });
//   });

//   it('contains a button to add a new task', () => {
//     cy.mount(<Day day={testDay} />);
//     cy.get('.controls button').should('contain', 'Ny uppgift');
//   });

//   // Du kan lägga till fler tester här
// });

import Day from './Day';
import Item from './Item';

describe('Day Component', () => {
  const daysOfWeek = [
    'Söndag',
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag'
  ];

  const testDay = {
    index: 1, // Måndag
    items: [
      { id: 1, text: 'Test item 1', done: false },
      { id: 2, text: 'Test item 2', done: true }
    ]
  };

  it('renders the day name correctly', () => {
    cy.mount(<Day day={testDay} />);
    cy.get('.day h2').should('contain', daysOfWeek[testDay.index]);
  });

  it('renders the items correctly', () => {
    cy.mount(<Day day={testDay} />);
    cy.get('.day').within(() => {
      cy.get(Item).should('have.length', testDay.items.length);
      testDay.items.forEach(item => {
        cy.contains(item.text).should('exist');
      });
    });
  });

  it('contains a button to add a new task', () => {
    cy.mount(<Day day={testDay} />);
    cy.get('.controls button').should('contain', 'Ny uppgift');
  });

  // Du kan lägga till fler tester här
});
