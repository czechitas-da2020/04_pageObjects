let hoverPage = {
  // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
  // ze to je jen element, ne funkce, ktera neco dela.
  // PRIKLAD - funkce, ktera vraci element
  get buttonAddCat() { return $('#addItem') },
  
  // missing: cardCat, cardDog, cardUnicorn




  // this function hover on card, if you add this..
  // it is used as hoverPage.hoverOn(hoverPage.dogCard)
  hoverOn: function(card){
    card.moveTo()
  },
}

module.exports = hoverPage