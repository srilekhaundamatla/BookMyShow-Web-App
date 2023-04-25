describe('Book Ticket Form', () => {
  it('fills in the form and submits', () => {
    cy.visit('/BookTicket.html') // replace with actual URL
    
    // select show time
    cy.get('#showtime').select('9:00AM')
    
    // enter date
    cy.get('#showdate').type('2023-05-01')
    
    // enter number of tickets
    cy.get('#nooftickets').type('2')
    
    // submit form
    cy.get('#BookTicket').click()
    
    // assert that the page redirects to Payment.html
    cy.url().should('include', 'Payment.html')
  })
})
