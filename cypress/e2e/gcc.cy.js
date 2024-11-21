describe('Glasgow Clyde College Tests', () => {
    beforeEach(() => {
      // Visit the Example Cypress.io E2E Testing page before each test
      cy.visit('https://www.glasgowclyde.ac.uk/')
    })
  
    it('successfully loads the homepage', () => {
      // Check if the homepage title is correct
      cy.title()
      .should('include', 'Glasgow')
      
      //accept the cookies 
      cy.get('#accept_cookies')
      .click()
            
      // Reference the <a> element using its class and href attributes 
      cy.get('a.menu_link.level_1.search_link[href="/search"]')
      .should('be.visible') 
      .click(); // Click the element

      
      cy.get('#search_query_field')
      .should('be.visible')
      .type('Computing')

      // Reference the <button> element using its class 
      cy.get('button.button.cta_primary') 
      .should('be.visible') // Ensure the element is visible 
      .click(); // Click the element

     // Reference the <p> element using its class 
     cy.get('p.results_info') 
     .should('be.visible') // Ensure the element is visible 
     .contains('Found 60 results for your search.'); // Verify the text content
      


    })



  
  })