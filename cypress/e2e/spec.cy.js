import LoginPage from "../pageObjects/LoginPage"

describe('login test suite', () => {
  
  //create a new instance of the LoginPage class called loginPage
  const loginPage = new LoginPage()

  beforeEach(()=>{
    loginPage.visit()
  })

  it('the_form_is_present',() => {
    //cy.get('#formName')
    loginPage.getForm()
  })
  it('correct_login',()=>{
    loginPage.getForm()
    loginPage.typeUsername('admin')
    loginPage.typePassword('admin')
    loginPage.submit()
    cy.contains('Welcome, admin!')
  })

  it('wrong_login',()=>{
    loginPage.getForm()
    loginPage.typeUsername('admina')
    loginPage.typePassword('admina')
    loginPage.submit()
    loginPage.getForm()
  })
  it('clear_button',()=>{
    loginPage.getForm()
    loginPage.typeUsername('admina')
    loginPage.typePassword('admina')
    loginPage.cancel()
    loginPage.checkFieldsAreEmpty()

  })

})