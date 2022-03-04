describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://phish.in/api/v1/years.json?include_show_counts=true',
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
      }
    },{"data": [
      {
          "date": "1983-1987",
          "show_count": 34
      },
      {
          "date": "1988",
          "show_count": 44
      },
      {
          "date": "1989",
          "show_count": 64
      }]})
    cy.visit('http://localhost:3000/')
  })

  it('should be true', () => {
    expect(true).to.equal(true)
  })
})