import 'cypress-iframe';
describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login.html')
    // switch to the frame containing the login form
   
  })

  it('displays the correct headings', () => {
    cy.get('.headingsContainer h3')
    .should('have.text', 'Login')
    .then(($h3) => {
      cy.log($h3.text()); // log the text of the h3 element
    });
  
    cy.get('.headingsContainer p').should('have.text', 'Login with your username and password')
  })

  it('requires username and password', () => {
    cy.get('#form').submit()
    cy.get('#username:invalid').should('have.length', 1)
    cy.get('#password:invalid').should('have.length', 1)
  })


  it('displays an error message for invalid login credentials', () => {
    cy.get('#username').type('invalid_username')
    cy.get('#password').type('invalid_password')
    cy.get('#loginas').select('User')
    cy.get('.loginbtn').click()
  })
  it('requires username and password', () => {
    cy.get('#form').submit()
    cy.get('#username:invalid').should('have.length', 1)
    cy.get('#password:invalid').should('have.length', 1)
  })

  it('accepts valid login credentials', () => {
    cy.get('#username').type('valid_username')
    cy.get('#password').type('valid_password')
    cy.get('#loginas').select('User')
    cy.get('.loginbtn').click()
    // assert that the user is redirected to the correct page
  })

  it('redirects to the registration page when clicking on the sign up link', () => {
    cy.get('.register a').click()
    // assert that the user is redirected to the registration page
    cy.url().should('include', '/Register.html')
  })
})  
