import Day from './Day';

describe('Day Component', () => {
  it('renders correctly with initial state', () => {
    // Setup with initial props
    cy.mount(<Day dayName="Monday" items={[]} onAddTask={cy.stub().as('addTask')} />);
    // Assert the initial state
    cy.contains('h2', 'Monday'); // Check day name
    cy.get('input').should('not.exist'); // Input should not be visible
    cy.get('button').contains('Ny uppgift').should('be.visible');
  });
});


it('allows adding a new task', () => {
  cy.mount(<Day dayName="Tuesday" items={[]} onAddTask={cy.stub().as('addTask')} />);
  cy.get('button').contains('Ny uppgift').click();
  cy.get('input').should('be.visible').type('New Task');
  cy.get('button').contains('Spara').click();

  // Asserts
  cy.get('@addTask').should('have.been.calledWith', {
    day: 'Tuesday',
    text: 'New Task',
    done: false,
    late: false
  });
  cy.get('input').should('not.exist'); // Input should be hidden again
});