describe('Main Page Spec', () => {
  before(() => {
    cy.visit('http://localhost:5173/')
  })
  it('Should have the title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('contain', 'Vite + React')

  })
})