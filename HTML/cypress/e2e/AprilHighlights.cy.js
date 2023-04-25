describe('April Highlights', () => {
  beforeEach(() => {
    cy.visit('/AprilHighlights.html');
  });

  it('should redirect to the correct page when clicking "Buy Tickets" for Russian Grand Ballet', () => {
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click();
    cy.url().should('include', 'BookTicket.html');
  });

  it('should redirect to the correct page when clicking "Buy Tickets" for Sunday in the Park with George', () => {
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('#ticket').click();
    cy.url().should('include', 'BookTicket.html');
  });
});
