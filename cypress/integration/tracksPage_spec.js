describe('Tracks Page User Flow', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years/1983-1987.json',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    })
    cy.visit('http://localhost:3000/1983-1987/1324')
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

  it('Should have a "Back to 1983-1987 Shows" link', () => {
    cy.get('.back-to-shows-link')
      .should('have.text', 'Back to 1983-1987 Shows')
  });

  it('Should have a Random Show link', () => {
    cy.get('.random-show-link-tracks')
      .should('have.text', 'Random Show')
  });

  it('Should have a subheading', () => {
    cy.get('.tracks-page-venue-name')
      .should('have.text', 'Harris-Millis Cafeteria, University of Vermont')
  });

  it('Should have a show date', () => {
    cy.get('.tracks-page-show-date')
      .should('have.text', '12-02-1983')
  });

  it('Should have track cards', () => {
    cy.get('.track-card')
      .should('have.length', 2)
  });

  it('Should have song title on track cards', () => {
    cy.get('.track-card-song-title')
      .first()
      .should('have.text', 'Scarlet Begonias')
  });

  it('Should have audio on the track card', () => {
    cy.get('.track-card-audio')
      .should('have.attr', 'controls')
  });
});