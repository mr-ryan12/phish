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

  it.only('Should be able to add tracks to playlist', () => {
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
});