/* ZADANI:
    Presun vsechny elementy $(), $$() do souboru task1-selector.page.js
    Testy musi porad stejne fungovat
    Tento test muzes poustet pomoci -> `  npm test -- --spec task1  `
    V describe fairytale se muze stat, ze jediny radek bude overeni, ze tam nebudou kroky.
*/
const selectorsPage = require('../pages/task1-selector.page.solution')

describe('Page selectors', () => {
    before(() => {
        browser.url(selectorsPage.url);
    })
    it('10x clicking on button "Dej like!" increases value in blue rectangle to 10', () => {

        selectorsPage.likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            selectorsPage.giveLikeButton.click()
        }

        expect(selectorsPage.likeCounter).toHaveText('10')
    })

    describe('fairytale', () => {

        it('has correct header', () => {
            expect(selectorsPage.headerOfStory).toHaveText('O Budulínkovi')
        });

        it('has correct number of paragraphs', () => {
            expect(selectorsPage.paragraphsOfStrory).toBeElementsArrayOfSize(16)
        })
        it('has at least one paragraph with word "lištičky"', () => {
            expect(selectorsPage.foxInTheStory).toHaveTextContaining('lištičky')
        })
        it('has correct image - of Budulinek on fox', () => {
            expect(selectorsPage.imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
        })
    })
})