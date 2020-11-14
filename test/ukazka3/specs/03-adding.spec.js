const addingPage = require('../pages/03-adding.page')

describe('Adding page', () => { 
  before(()=>{
    browser.url(addingPage.url)
  })

  afterEach(()=>{
    addingPage.buttons.removeAll.click()
  })

  it('jde pridat kocku 20x', ()=>{
    for (let i = 0; i < 20; i++) {
      addingPage.buttons.addCat.click()
    }
    expect(addingPage.cats).toBeElementsArrayOfSize(20)
  })

  it('pro pridani 5 kocek a odebrani jedne zustava 4 viditelnych', ()=>{
    for (let i = 0; i < 5; i++) {
      addingPage.buttons.addCat.click()
    }
    addingPage.buttons.removeOne.click()
    expect(addingPage.cats).toBeElementsArrayOfSize(4)
  })
})