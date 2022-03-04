describe('Shows Page User Flow', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years/1983-1987.json',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { fixture: 'shows.json' })
    cy.visit('http://localhost:3000/1983-1987')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have a heading', () => {
    cy.get('h1')
      .should('have.text', 'PHISH')
  });

  it('Should have a home link', () => {
    cy.get('a')
      .first()
      .should('have.text', 'Home')
  });

  it('Should have a Random Show link', () => {
    cy.get('.random-show-link')
      .should('have.text', 'Random Show')
  });

  it('Should have a subheading', () => {
    cy.get('.shows-page-heading')
      .should('exist')
      .should('have.text', '1983-1987 Shows')
  });
});