import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the home page', ()=>{
    cy.visit('localhost:3000');
});

When('the user enters {string} into the login box', (username)=>{
    cy.get('#username').type(username);
});

When ('the user enters {string} into the password box', (password)=>{
    cy.get('#password').type(password);
});

When('the user clicks the login button', ()=>{
     cy.get('#login').click();
});

Then('the user should be logged in', ()=>{
     cy.contains('Welcome, admin!');
});