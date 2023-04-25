describe('Registration form', () => {
  beforeEach(() => {
    cy.visit('/Register.html')
  })

  it('displays all required input fields', () => {
    cy.get('form#form input[type="text"][id="username"]').should('be.visible')
    cy.get('form#form input[type="email"][id="emailid"]').should('be.visible')
    cy.get('form#form input[type="password"][id="pswrd"]').should('be.visible')
    cy.get('form#form input[type="password"][id="pswrd2"]').should('be.visible')
    cy.get('form#form button[type="submit"].registerbtn').should('be.visible')
  })

  it('displays error messages if required fields are empty', () => {
    cy.get('form#form button[type="submit"].registerbtn').click()
    cy.get('form#form input[type="text"][id="username"]:invalid').should('have.length', 1)
    cy.get('form#form input[type="email"][id="emailid"]:invalid').should('have.length', 1)
    cy.get('form#form input[type="password"][id="pswrd"]:invalid').should('have.length', 1)
    cy.get('form#form input[type="password"][id="pswrd2"]:invalid').should('have.length', 1)
  })

  it('redirects to the login page after successful registration', () => {
    cy.get('form#form input[type="text"][id="username"]').type('testuser')
    cy.get('form#form input[type="email"][id="emailid"]').type('testuser@example.com')
    cy.get('form#form input[type="password"][id="pswrd"]').type('testpassword')
    cy.get('form#form input[type="password"][id="pswrd2"]').type('testpassword')
    cy.get('form#form select[id="registeras"]').select('User')
    cy.get('form#form button[type="submit"].registerbtn').click()
    cy.get('.login a').click()
    cy.url().should('include', '/Login.html')
  })
})
