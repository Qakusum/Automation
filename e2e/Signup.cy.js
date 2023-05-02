
import { faker } from '@faker-js/faker';

describe('Sign up', () => {
    it.only('Visits sign up page.', () => {
      cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')

    //Valid data
    const Firstname = faker.name.firstName(); 
    const Surname = faker.name.lastName()
    const E_post = faker.internet.email();
    const Mobile = faker.phone.phoneNumberFormat(1);
    const Username = faker.internet.userName();
    const Password = faker.internet.password();
  

    cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')
    cy.get('input[name="FirstName"]').type(Firstname);
    cy.get('input[name="Surname"]').type(Surname);
    cy.get('input[name="E_post"]').type(E_post);
    cy.get('input[name="Mobile"]').type(Mobile);
    cy.get('input[name="Username"]').type(Username);

    cy.get('input[name="Password"]').type(Password).then(($passwordInput) => {
      cy.get('input[name="ConfirmPassword"]').then(($confirmPasswordInput) => {
        cy.wrap($confirmPasswordInput).type($passwordInput.val());
      });
    });
    cy.get("#submit").click()
  
  });
})
// For blank 
it('Visits sign up page', () => {
  cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')   
cy.get("#submit").click()

    })
// Email Password 
    it('Visits sign up page', () => {
      cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')   
      cy.get('input[name="FirstName"]').type('Test')
      cy.get('input[name="Surname"]').type('Test2')
      cy.get("#E_post").type('123456')
      cy.get('input[name="Mobile"]').type('98986876767')
      cy.get('input[name="Username"]').type('Test38')
      cy.get('input[name="Password"]').type('password')
      cy.get('input[name="ConfirmPassword"]').type('password')

    cy.get("#submit").click()
    
        })

       // Sign up with invalid email address
       describe('Sign up', () => {
        it('Sign up with invalid email address', () => {
          cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')
          cy.get("#E_post").type('invalid')
          cy.get('input[name="Mobile"]').type('98986876767')
          cy.get('input[name="Username"]').type('Test38')
          cy.get('input[name="Password"]').type('password')
          cy.get('input[name="ConfirmPassword"]').type('password')
          cy.get("#submit").click()
          cy.contains('Please enter a valid email address')
        })
    
      // Sign up with password that does not meet requirements
        it('Sign up with password that does not meet requirements', () => {
          cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')
          cy.get("#E_post").type('invalid')
          cy.get('input[name="Mobile"]').type('98986876767')
          cy.get('input[name="Username"]').type('Test38')
          cy.get('input[name="Password"]').type('password')
          cy.get('input[name="ConfirmPassword"]').type('password')
          cy.get("#submit").click()
          cy.contains('Password must be at least 6 characters')
        })
      
        //Sign up with missing required fields
        it('Sign up with missing required fields', () => {
          cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')
          cy.get("#E_post").type('invalid')
          cy.contains('Sign up').click()
          cy.contains('Please enter a valid email address')
          cy.contains('Please enter a username')
          cy.contains('Please enter a password')
          cy.get("#submit").click()
        })
      //Sign up with existing email address
        it('Sign up with existing email address', () => {
          cy.visit('https://itera-qa.azurewebsites.net/UserRegister/NewUser')
          cy.get("#E_post").type('invalid')
          cy.get('input[name="password"]').type('password123')
          cy.get('input[name="username"]').type('testuser')
          cy.get("#submit").click()
          cy.contains('Email address already exists')
        })
      })


 

