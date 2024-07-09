class LoginPage {
    //using a class to encapsulate methods and properties from the login page on the 'app' that we have built
    
    visit() {
        //this method allows us to load the main page of the 'app'
        cy.visit('localhost:3000')
    }

    getForm(){
        //retrieve the #formName form from the page. In this case it's an h1 heading. 
        return cy.get('#formName')
    }

    typeUsername(name){
        //retrieves the username box and types in the name variable
        return cy.get('#username').type(name)
    }

    typePassword(password){
        //retrieves the password box and types in the password variable
        return cy.get('#password').type(password)
    }

    submit(){
        //submits the login form
        return cy.get('#login').click()
    }

    cancel(){
        //click the cancel button
        return cy.get('#cancel_button').click()
    }

    checkFieldsAreEmpty() {
        cy.get('#username').should('have.value', '')
        cy.get('#password').should('have.value', '')
      }
    
}
//exports the class to be used in other files
export default LoginPage
