describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years.json?include_show_counts=true',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { fixture: 'yearCards.json' })
    cy.visit('http://localhost:3000/')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have a heading', () => {
    cy.get('h1')
      .first()
      .should('have.text', 'PHISH')
  });

  it('Should have a "Random Image" link', () => {
    cy.get('a')
      .first()
      .should('exist')
      .should('have.text', 'Random Show')
  });

  it('Should have year cards', () => {
    cy.get('.year-card')
      .should('have.length', 3)
  });

  it('Should have a logo in the year card', () => {
    cy.get('.year-card-logo')
      .first()
      .should('exist')
  });

  it('Should have a year displayed in the card', () => {
    cy.get('.year-card-date')
      .first()
      .should('exist')
      .should('have.text', '1983-1987')
  });

  it('Should display the total number of shows on the year card', () => {
    cy.get('.year-card-total-shows')
      .first()
      .should('have.text', 'Total Shows: 34')
  });

  it('Should be able to click a year card', () => {
    cy.get('.year-card')
      .first()
      .click()
      .url()
      .should('eq', "http://localhost:3000/1983-1987")
  })

  it('Should have a clickable link to a random show', () => {
    cy.get('.random-show-link-home')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/randomShow')
  });
});

describe('Main Page User Flow - Failed Fetch', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years.json?include_show_counts=true',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { statusCode: 404 })
    cy.visit('http://localhost:3000/')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should not have any year cards', () => {
    cy.get('.year-card')
      .should('have.length', 0)
      .should('not.exist')
  })

  it('Should have an error message', () => {
    cy.get('h2')
      .should('exist')
      .should('have.text', 'So sorry, something went wrong')
  });
});

describe('Main Page User Flow - Incorrect URL Entry', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years.json?include_show_counts=true',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    }, { fixture: 'yearCards.json' })
    cy.visit('http://localhost:3000/asdf')
  });

  it('Should have a background image', () => {
    cy.get('body')
      .should('have.css', 'background-image', 'url("http://localhost:3000/static/media/backdrop.5a496141d28fb4362490.jpeg")')
  });

  it('Should have an error message', () => {
    cy.get('h2')
      .should('exist')
      .should('have.text', 'So sorry, that page is not found.')
  });

  it('Should not have year cards displayed', () => {
    cy.get('.year-card')
      .should('have.length', 0)
      .should('not.exist')
  })

  it('Should have a link back to the home page', () => {
    cy.get('a')
      .should('exist')
      .should('have.text', 'Home')
  });

  it('Should take the user back to the home page', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/asdf')
      .get('a')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  });
});