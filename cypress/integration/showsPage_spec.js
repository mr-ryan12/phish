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
      .first()
      .should('have.text', 'Random Show')
  });

  it('Should have a subheading', () => {
    cy.get('.shows-page-heading')
      .should('exist')
      .should('have.text', '1983-1987 Shows')
  });

  it('Should have a show card', () => {
    cy.get('.show-card')
      .should('have.length', 1)
  });

  it('Should have a name of the venue', () => {
    cy.get('.show-card-venue-name')
      .should('have.text', 'Harris-Millis Cafeteria, University of Vermont')
  });

  it('Should have a date of the show', () => {
    cy.get('.show-card-date')
      .should('have.text', '12-02-1983')
  });

  it('Should have a show location', () => {
    cy.get('.show-card-location')
      .should('have.text', 'Burlington, VT')
  });

  it('Should ahve a number of tracks', () => {
    cy.get('.show-card-number-of-tracks')
      .should('have.text', 'Number of Tracks: 2')
  });

  it('Should be able to click on the show card', () => {
    cy.get('.show-card')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/1983-1987/1324')
  });
});

describe('Shows Page User Flow - Failed Fetch', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years/1983-1987.json',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { statusCode: 404 })
    cy.visit('http://localhost:3000/1983-1987')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have an error message', () => {
    cy.get('h2')
      .should('have.text', 'Something went wrong')
  });

  it('Shoud not display any cards', () => {
    cy.get('.show-card')
      .should('not.exist')
  });
});

describe('Shows Page User Flow - Incorrect URL Entry', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years/1983-1987.json',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { fixture: 'shows.json' })
    cy.visit('http://localhost:3000/1983-1987asdf')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have an error message', () => {
    cy.get('h2')
      .should('have.text', 'So sorry, that page is not found.')
  });

  it('Shoud not display any cards', () => {
    cy.get('.show-card')
      .should('not.exist')
  });

  it('Should have a home link', () => {
    cy.get('a')
      .should('exist')
      .should('have.text', 'Home')
  });

  it('Should be able to go back to the home page', () => {
    cy.get('a')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  });
});