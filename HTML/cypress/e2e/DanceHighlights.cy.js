describe('Dance Highlights Page', () => {
  it('successfully loads', () => {
    cy.visit('/DanceHighlights.html')
  })

  it('clicks Thunder From Down Under Buy Tickets button', () => {
    cy.visit("DanceHighlights.html");
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click()
    cy.url().should('include', 'BookTicket.html')
  })

  it('clicks Stars On Ice Buy Tickets button', () => {
    cy.visit("DanceHighlights.html");
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click()
    cy.url().should('include', 'BookTicket.html')
  })
})
