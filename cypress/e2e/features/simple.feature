Feature: College Login

Scenario: Form is present 
    Given the user is on the home page
    When the user enters "admin" into the login box
    And the user enters "admin" into the password box
    And the user clicks the login button
    Then the user should be logged in 