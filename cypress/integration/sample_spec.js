describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://kwojtas172.github.io/scores-app/#/')
  
      cy.contains('type').click()
    })
  })