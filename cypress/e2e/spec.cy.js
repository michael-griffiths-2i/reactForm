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
  it('clear_button',()=>{
      cy.get('#formName')
      cy.get('#username').type('just typing some stuff in here')
      cy.get('#password').type('just typing some stuff in here')
      cy.get('#cancel_button').click()
      cy.get('#username').should('have.value', '')
      cy.get('#password').should('have.value', '')
  })
//  it('check_color', () => {
//    cy.get('#formName').then(($formName) => {
//      const style = window.getComputedStyle($formName[0])
//      expect(style.color).to.equal('rgb(f, 0, 0)')
//    })
//  })



//Testing that a logout button is present
//  it('logout_button',()=>{
//    cy.get('#logout').click()
//
//  })


})