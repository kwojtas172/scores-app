describe('Soccer App Test', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
    it('checking switch light/dark mode', () => {
      cy.get('.header-container_nav_ul li:first a').wait(2000).click()
      .wait(2000).click()
      .wait(2000).click()
      .reload()
      .wait(2000)
      .clearLocalStorage()
      .visit('/')
      .wait(2000)
    })
    it('clicked liked score', () => {
      cy.get('.show-scores > ul li:first span:first input').click()
      .wait(2000)
      .reload()
      .wait(2000)
      .get('.main-content_scores_nav_list li:last a').click()
      .wait(2000)
      .clearLocalStorage()
      .visit('/')
      .wait(2000)
    })
    it('show table', () => {
      cy.get('.show-country-league:first span')
      .click()
      .wait(2000)
    })
  })

  
  