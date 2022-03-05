describe('Random Show User Flow', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/random-show',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { fixture: 'randomShow.json' })
    cy.visit('http://localhost:3000/randomShow')
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

  it('Should have a playlist link', () => {
    cy.get('a')
      .eq(1)
      .should('have.text', 'Playlist')
  });

  it('Should have a subheader with show title', () => {
    cy.get('h2')
      .first()
      .should('have.text', 'Times Union Center')
  });

  it('Should have a subheader with show date', () => {
    cy.get('p')
      .should('have.text', '10-09-1999')
  });

  it('Should have a track card', () => {
    cy.get('.track-card')
      .should('exist')
  });
});

describe('Random Show Page User Flow - Failed Fetch', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/random-show',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { statusCode: 404 })
    cy.visit('http://localhost:3000/randomShow')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have an error message', () => {
    cy.get('h2')
      .should('have.text', 'So sorry, something went wrong.')
  });
});

describe('Random Show Page User Flow - Incorrect URL Entry', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/random-show',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    })
    cy.visit('http://localhost:3000/randomShowASDF')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have an error message', () => {
    cy.get('h2')
      .should('have.text', 'So sorry, that page is not found.')
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