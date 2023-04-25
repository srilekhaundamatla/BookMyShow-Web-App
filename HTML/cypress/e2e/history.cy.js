describe("Booked Events History Table", () => {
  it("displays the correct headers", () => {
    cy.visit("/History.html");
    cy.get("#table thead th").should(($th) => {
      expect($th.eq(0)).to.contain("No");
      expect($th.eq(1)).to.contain("Name");
      expect($th.eq(2)).to.contain("Show Time");
      expect($th.eq(3)).to.contain("Show Date");
      expect($th.eq(4)).to.contain("No Of Tickets");
    });
  });
});
