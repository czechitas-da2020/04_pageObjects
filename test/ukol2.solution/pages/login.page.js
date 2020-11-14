let loginPage = {
  // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
  // ze to je jen element, ne funkce, ktera neco dela.
  // PRIKLAD - funkce, ktera vraci element
  // get buttonAddCat() { return $('#addItem') },
  get headers() { return $$('h1') },
  get firstHeader() { return $$('h1')[0] },
}

module.exports = loginPage