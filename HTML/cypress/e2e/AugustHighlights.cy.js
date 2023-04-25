describe("August Highlights", () => {
  it("should be able to book tickets for Cats", () => {
    cy.visit('AugustHighlights.html');
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get("#ticket").click();
    cy.url().should("include", "BookTicket.html");
  });

  it("should be able to book tickets for Hairspray", () => {
    cy.visit("AugustHighlights.html");
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get("#ticket").click();
    cy.url().should("include", "BookTicket.html");
  });
});


