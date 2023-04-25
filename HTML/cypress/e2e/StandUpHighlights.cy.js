describe('Buy Tickets button', () => {
  it('should navigate to BookTicket.html when clicked', () => {
    cy.visit('/StandUpHighlights.html'); // Replace with the URL of your website
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    // Click the first "Buy Tickets" button
    cy.get('#ticket').click();
  });
});
