describe('login test suite', () => {
  beforeEach(function(){
    cy.visit('localhost:3000')
  })

  it('the_form_is_present',() => {
    cy.get('#formName')
  })
  it('correct_login',()=>{
    cy.get('#formName')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('#login').click()
    cy.contains('Welcome, admin!')
  })

  it('wrong_login',()=>{
    cy.get('#formName')
    cy.get('#username').type('admina')
    cy.get('#password').type('admina')
    cy.get('#login').click()
    cy.get('#formName')
  })


})