describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years.json?include_show_counts=true',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    },{ fixture: 'yearCards.json' })
    cy.visit('http://localhost:3000/')
  })

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  })

  it('Should have a heading', () => {
    cy.get('h1')
      .first()
      .should('have.text', 'PHISH')
  })
})