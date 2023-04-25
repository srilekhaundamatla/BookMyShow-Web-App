describe('Buy Tickets', () => {
  it('should navigate to the BookTicket.html page when "Buy Tickets" button is clicked for Jurassic World Live', () => {
    cy.visit('/FamilyShowsHighlights.html');
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.contains('JURASSIC WORLD LIVE')
      .parent()
      .find('a')
      .click();
    
    cy.url().should('include', 'BookTicket.html');
    cy.url().should('include', 'data=JURASSIC%20WORLD%20LIVE');
  });
});
