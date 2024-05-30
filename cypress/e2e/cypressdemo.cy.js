describe('Example Cypress.io E2E Test Suite', () => {
  beforeEach(() => {
    // Visit the Example Cypress.io E2E Testing page before each test
    cy.visit('https://example.cypress.io/')
  })

  it('successfully loads the homepage', () => {
    // Check if the homepage title is correct
    cy.title().should('include', 'Cypress.io')
  })

  it('contains the correct header', () => {
    // Check if the header contains the expected text
    cy.get('h1').contains('Kitchen Sink')
  })

  it('navigates to a new page on command click', () => {
    // Click on a command in the list
    cy.contains('type').click()

    // Verify the new URL includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Verify the new page has the correct heading
    cy.get('h1').contains('Actions')
  })

  // Add more tests as needed for different commands and functionalities
})
