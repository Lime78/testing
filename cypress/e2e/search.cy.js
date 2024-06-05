describe('Search Functionality', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should filter items based on search input', () => {
      // Lägg till en väntetid för att säkerställa att sidan är fullständigt laddad
      cy.wait(1000);
  
      cy.get('.prio-items .item').should('have.length.greaterThan', 0); 
  
      const searchText = 'specific task';
      cy.get('input[type="search"]').type(searchText);
      
      cy.wait(500);
    });
  
    it('should show no items if search does not match', () => {
      // Sök efter en uppgift som inte finns
      const nonExistentTask = 'non-existent task';
      cy.get('input[type="search"]').type(nonExistentTask);
      
    
      cy.wait(500);
  
      cy.get('.prio-items .item').should('have.length', 0);
    });
  });
  