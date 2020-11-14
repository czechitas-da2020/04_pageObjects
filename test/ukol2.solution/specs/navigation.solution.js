/* ZADANI:
    Over, ze na kazde strance je spravna H1 
    A ze title je taky stejne kvalitni. 
*/

// Castecne reseni problemu. Nakonec navigace nepouzita, jednodussi je pouziti browser.url()
const homePage = require('../pages/home.page')
const loginPage = require('../pages/login.page')
const hoverPage = require('../pages/hover.page')
const loadingPage = require('../pages/loading.page')

describe('Automation page - Navigation', () => {
    before(() => {
        browser.url('/')
    })

    describe('HomePage', () => {
        before(() => {
            browser.url('/')
        })
        it('has correct title', () => {
            expect(browser).toHaveTitle('Czechitas DA2020 Automation page')
        })
        it('has correct header', () => {
            expect(homePage.header).toHaveText('Vítej na stránce, kde budeš kouzlit a automatizovat.')
        })
    })

    describe('LoginPage', () => {
        before(() => {
            browser.url('/login.html')
        })
        it('has correct title', () => {
            expect(browser).toHaveTitle('DA | Login')
        })
        it('has correct header', () => {
            expect(loginPage.firstHeader).toHaveText('Přihlášení')
        })
    })

    describe('HoverPage', () => {
        before(() => {
            browser.url('/hover.html')
        })
        it('has correct title', () => {
            expect(browser).toHaveTitle('DA | Hover')
        })
        it('has correct header', () => {
            expect(hoverPage.header).toHaveText('Hover')
        })
    })

    describe('LoadingPage', () => {
        before(() => {
            browser.url('/loading.html')
        })
        it('has correct title', () => {
            expect(browser).toHaveTitle('DA | Loading')
        })
        it('has correct header', () => {
            expect(loadingPage.header).toHaveText('Loading...')
        })
    })
})