describe('Footer', () => {
  it('should display the footer with the correct text and link', () => {
    cy.visit('/footer.html') // replace with the actual path
    
    cy.get('.footer')
      .should('contain', 'All rights reserved @Book Your Events')
      .find('a')
      .should('have.attr', 'href', 'About.html')
      .should('have.attr', 'target', 'main')
      .should('contain', 'About Us')
  })
})
