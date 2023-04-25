describe('Concerts Page', () => {
  beforeEach(() => {
    cy.visit('/concertsHighlights.html')
  })

  it('displays Madonna concert details', () => {
    cy.get('h3').contains('MADONNA')
      .parent('.textright')
      .contains('Crypto.com Arena , From September 27 - October 1 , 2023')
    cy.get('a').should('exist')
  })

  it('displays Bruce Springsteen concert details', () => {
    cy.get('h3').contains('BRUCE SPRINGSTEEN')
      .parent('.textright')
      .contains('The Forum , From December 4 - 6 , 2023')
    cy.get('a').should('exist')
  })

  it('allows users to buy tickets', () => {
    cy.window().then((win) => {
      win.bookticket = () => {} // define an empty function to mock bookticket()
    })
    cy.get('a[id="ticket"]').first().click()
    cy.url().should('include', 'BookTicket.html')
  })
})
