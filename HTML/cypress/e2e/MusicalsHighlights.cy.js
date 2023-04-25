describe('Musicals page', () => {
  beforeEach(() => {
    cy.visit('/musicalshighlights.html')
  })

  it('should be able to click on the Buy Tickets button for Lion King', () => {
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click()
    // Assert that the user is navigated to the BookTicket page
    cy.url().should('include', 'BookTicket.html')
  })

  it('should be able to click on the Buy Tickets button for Les Miserables', () => {
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click()
    // Assert that the user is navigated to the BookTicket page
    cy.url().should('include', 'BookTicket.html')
  })

  it('should be able to click on the Buy Tickets button for Six', () => {
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click()
    // Assert that the user is navigated to the BookTicket page
    cy.url().should('include', 'BookTicket.html')
  })
})
