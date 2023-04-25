describe('Plays Highlights', () => {
  it('should navigate to BookTicket.html when Buy Tickets is clicked', () => {
    cy.visit('/PlaysHighlights.html') // assuming this is the URL of the page you want to test
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('a#ticket').first().click() // find the first Buy Tickets link and click it
    cy.url().should('include', 'BookTicket.html') // check if the URL has changed to BookTicket.html
  })

  it('should display AVA - THE SECRET CONVERSATIONS when the Category is clicked', () => {
    cy.visit('/PlaysHighlights.html')
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('b#Category').click()
  })
})
