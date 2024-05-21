
import Day from './Day.jsx'


describe('Day Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders the day name correctly', () => {
        const testDate = new Date(2024, 4, 21); // Adjust date as needed

        cy.mount(<Day day={[]} date={testDate} />);

        cy.contains('Tisdag'); // Adjust based on the date used
    });

    it('renders items correctly', () => {
        const items = [
            { id: 1, text: 'Item 1' },
            { id: 2, text: 'Item 2' }
        ];

        const testDate = new Date(2024, 4, 21); // Adjust date as needed

        cy.mount(<Day day={items} date={testDate} />);

        cy.get('.day').within(() => {
            cy.contains('Item 1');
            cy.contains('Item 2');
        });
    });

    it('has a button to add a new task', () => {
        const testDate = new Date(2024, 4, 21); // Adjust date as needed

        cy.mount(<Day day={[]} date={testDate} />);

        cy.get('button').contains('Ny uppgift');
    });

    it('interacts with the new task button', () => {
        const onClick = cy.stub();
        const testDate = new Date(2024, 4, 21); // Adjust date as needed

        cy.mount(<Day day={[]} date={testDate} onClick={onClick} />);

        cy.get('button').contains('Ny uppgift').click();
        cy.wrap(onClick).should('have.been.called');
    });
});
