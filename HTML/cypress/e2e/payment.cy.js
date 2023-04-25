describe('Payment Details Form', () => {
  beforeEach(() => {
    cy.visit('/payment.html')
  })

  it('should allow user to enter payment details and submit the form', () => {
    cy.get('[name="name"]').type('John Doe')
    cy.get('[name="number"]').type('1234567890123456')
    cy.get('[name="date"]').type('2024-12-01')
    cy.get('[name="cvv"]').type('123')
    cy.get('#payment').click()
  })

  it('should show error messages if fields are not filled correctly', () => {
    cy.get('[name="name"]').type('John Doe') // leave name field blank
    cy.get('[name="number"]').type('123') // enter invalid card number
    cy.get('[name="date"]').type('2021-01-01') // enter expired date
    cy.get('[name="cvv"]').type('123') // leave cvv field blank
    cy.get('#payment').click()
   
  })
})
