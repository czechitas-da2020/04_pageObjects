/* ZADANI:
    Over, ze na kazde strance je spravna H1 
    A ze title je taky stejne kvalitni. 
*/
const pages = require('../pages/index')
const navigation = require('../components/nav.component')


describe('Automation page - Navigation', () => {
    before(() => {
        browser.url('/')
    })
    it('template', () => {
        // Priklad, 
        navigation.buttons.click()
        browser.pause(3000)
        navigation.inputs.click()
        browser.pause(3000)
    })

    describe('HomePage', () => {

        before(() => {

        })
        it('has correct title', () => {

        })
        it('has correct header', () => {

        })
    })

    // muzes pokracovat dal s dalsimi strankami
})