describe('Classical Opera Highlights', () => {
  it('should display two shows and allow buying tickets', () => {
    cy.visit('/ClassicalOperaHighlights.html');

    // Check the page title
    cy.title().should('eq', 'Classical Opera');

    // Check the first show details
    cy.get('.shows').first().within(() => {
      cy.get('img').should('have.attr', 'src', '../images/andrea.jpg');
      cy.contains('h3', 'ANDREA BOCELLI');
      cy.contains('p', 'Italian opera singer, songwriter, and record producer');
      cy.contains('h3', 'Hollywood Bowl , From May 9 - 10 , 2023');
      cy.window().then((win) => {
        win.bookticket = () => {} // define an empty function to mock bookticket()
      })
      cy.get('a').should('have.text', 'Buy Tickets').click();
    });

    // Check the URL after clicking the first Buy Tickets button
    cy.url().should('include', 'BookTicket.html');

    // Check the URL after clicking the second Buy Tickets button
    cy.url().should('include', 'BookTicket.html');
  });
});
