let selectorsPage = {
  // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
  // ze to je jen element, ne funkce, ktera neco dela.
  // PRIKLAD - funkce, ktera vraci element
  url: 'https://automation.cervik.repl.co/selectors.html',
  get buttonAddCat() { return $('#addItem') },
  get giveLikeButton() { return $('#like-button') },
  get likeCounter() { return $('#lvlAwesome') },

  get headerOfStory() { return $('#pohadka h2') },
  get paragraphsOfStrory() { return $$('#pohadka p') },
  get foxInTheStory() { return $('p*=lištičky') },
  get imageOfStory() { return $('#pohadka img') },
}

module.exports = selectorsPage