let homePage = {
  baseUrl: 'http://czechitas-app.herokuapp.com',
  navbar: {
    get logo() { return $('#logo') },
    get loginButton() { return $("#login")}
  },

  // function open, just open page :)
  open: function () {
    browser.url(this.baseUrl)
  }
}

module.exports = homePage;
