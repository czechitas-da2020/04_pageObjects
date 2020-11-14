let addingPage = {
  get url() { return 'https://automation.cervik.repl.co/adding.html'},
  buttons: {
    get addCat() { return $('#addItem') },
    get removeOne() { return $('#removeItem') },
    get removeAll() { return $('#removeAll') },
  },
  get cats() { return $$('.cat') },
}

module.exports = addingPage