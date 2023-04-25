describe('New Event Form', () => {
  it('successfully submits the form', () => {
    cy.visit('/Admin.html')

    cy.get('#showname').type('My Show Name')
    cy.get('#location').type('My Show Location')
    cy.get('#showstartdate').type('2023-05-01')
    cy.get('#showenddate').type('2023-05-05')
    cy.get('#showmonth').select('May')
    cy.get('#showcategory').select('Musicals')
    cy.get('#showcontent').type('Lorem ipsum dolor sit amet.')
    cy.get('#ticket_cost').type('50')
    cy.get('#taxes').type('5')

    cy.get('.registerbtn').click()
  })
})
