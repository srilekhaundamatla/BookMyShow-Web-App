describe('Buy Tickets Button', () => {
  it('should navigate to the BookTicket.html page', () => {
    cy.visit('alittle.html')
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click()
    cy.url().should('include', 'BookTicket.html')
  })
})
