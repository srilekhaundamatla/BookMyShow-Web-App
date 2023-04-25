describe('Book Your Events website', () => {
  it('displays slideshow and event highlights', () => {
    // Visit the website
    cy.visit('/Main_Frame.html')

    // Verify the slideshow images are displayed
    cy.get('.mySlides').should('have.length', 4)

    // Click on the March dropdown button
    cy.contains('button', 'March').click()

    // Verify the March dropdown items are displayed
    cy.get('.dropdown-container').eq(0).should('be.visible')

    // Click on the April dropdown button
    cy.contains('button', 'April').click()

    // Verify the April dropdown items are displayed
    cy.get('.dropdown-container').eq(1).should('be.visible')
   

    // Click on the May dropdown button
    cy.contains('button', 'May').click()

    // Verify the May dropdown items are displayed
    cy.get('.dropdown-container').eq(2).should('be.visible')
    
    // Click on the first event's "Details" link
    cy.contains('.textright h4', 'SIX').siblings('a').click()

    // Verify the SIX event page is displayed
    cy.url().should('include', 'six.html')
   
    
  })
})
