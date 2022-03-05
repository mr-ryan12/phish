describe('Playlist User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/playlist')
  });

  it('Should have a heading', () => {
    cy.get('h1')
      .should('have.text', 'PHISH')
  });

  it('Should have links', () => {
    cy.get('a')
      .should('have.length', 2)
  });

  it('Should have a home link', () => {
    cy.get('a')
      .first()
      .should('have.text', 'Home')
  });

  it('Should have a random show link', () => {
    cy.get('.random-show-link-playlist')
      .should('have.text', 'Random Show')
  });

  it('Should have a subheading', () => {
    cy.get('.playlist-header')
      .should('have.text', 'Playlist')
  });

  it('Should start off without any tracks', () => {
    cy.get('.playlist-card')
      .should('not.exist')
  });

  it('Should display a message if there are not any tracks', () => {
    cy.get('.empty-playlist-message')
      .should('exist')
      .should('have.text', 'No tracks yet! Please add some!')
  });

  it('Should be able to add tracks to playlist', () => {
    cy.visit('http://localhost:3000')
      .get('.year-card')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/1983-1987')
      .get('.show-card')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/1983-1987/1324')
      .get('.add-to-playlist-button')
      .first()
      .click()
      .get('[data-cy=playlist-link]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/playlist')
      .get('.playlist-card')
      .should('exist')
      .should('have.length', 1)
      .contains('Scarlet Begonias')
  });

  it('Should be able to remove tracks from playlist', () => {
    cy.visit('http://localhost:3000')
      .get('.year-card')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/1983-1987')
      .get('.show-card')
      .first()
      .click()
      .url()
      .should('eq', 'http://localhost:3000/1983-1987/1324')
      .get('.add-to-playlist-button')
      .first()
      .click()
      .get('[data-cy=playlist-link]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/playlist')
      .get('.playlist-card')
      .should('exist')
      .should('have.length', 1)
      .contains('Scarlet Begonias')
      .get('.remove-from-playlist-button')
      .click()
      .get('.playlist-card')
      .should('not.exist')
      .get('.empty-playlist-message')
      .should('exist')
      .should('have.text', 'No tracks yet! Please add some!')
  });
});

describe('Playlist User Flow - Broken Fetch', () => {
  beforeEach(() => {
    cy.intercept('https://phish.in/api/v1/tracks/26152', { statusCode: 404 })
    cy.visit('http://localhost:3000/1983-1987/1324')
  });

  it('Should let the user know something went wrong', () => {
    cy.get('.add-to-playlist-button')
      .first()
      .click()
      .get('.track-card')
      .contains('Something went wrong')
  });
});

describe('Playlist User Flow - Incorrect URL Entry', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/playlistasdf')
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

  it('Should have a link back to the home page', () => {
    cy.get('a')
      .should('exist')
      .should('have.text', 'Home')
  });

  it('Should take the user back to the home page', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/playlistasdf')
      .get('a')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  });
});