const speakerDetails = [
  {
    guestImage: 'images/martini.jpg',
    guestName: 'Martini (cocktail)',
    guestProfession: 'Wet,dry,dirty and perfect martini available',
    careerDetails: 'The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
  },
  {
    guestImage: 'images/margarita.webp',
    guestName: 'Margarita',
    guestProfession: 'The classic Margarita',
    careerDetails: 'Combining the tang of lime and the sweetness of orange liqueur with the distinctive strength of tequila',
  },
  {
    guestImage: 'images/negroni.jpg',
    guestName: 'Negroni',
    guestProfession: 'Thee Italian cocktail, Aperitivo',
    careerDetails: 'Made of one part gin, one part vermouth rosso, and one part Campari, garnished with orange peel',
  },
  {
    guestImage: 'images/mai.jpg',
    guestName: 'Mai Tai',
    guestProfession: 'Served: On the rocks; poured over ice.',
    careerDetails: 'The Mai Tai is a cocktail based on rum, Curaçao liqueur, orgeat syrup, and lime juice.',
  },
  {
    guestImage: 'images/bloody.jpg',
    guestName: 'A Bloody Mary',
    guestProfession: 'Served: On the rocks; poured over ice.',
    careerDetails: 'It is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and celery salt',
  },
  {
    guestImage: 'images/mojito.jpg',
    guestName: 'Mojito',
    guestProfession: 'A traditional Cuban highball',
    careerDetails: ' The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink.',
  },
];

function displayInfo() {
  // section.classList.add('show');
  document.getElementById('guest1').src = speakerDetails[0].guestImage;
  document.getElementById('guest-name1').innerHTML = speakerDetails[0].guestName;
  document.getElementById('guest-prof1').innerHTML = speakerDetails[0].guestProfession;
  document.getElementById('guest-career1').innerHTML = speakerDetails[0].careerDetails;
  document.getElementById('guest2').src = speakerDetails[1].guestImage;
  document.getElementById('guest-name2').innerHTML = speakerDetails[1].guestName;
  document.getElementById('guest-prof2').innerHTML = speakerDetails[1].guestProfession;
  document.getElementById('guest-career2').innerHTML = speakerDetails[1].careerDetails;
  document.getElementById('guest3').src = speakerDetails[2].guestImage;
  document.getElementById('guest-name3').innerHTML = speakerDetails[2].guestName;
  document.getElementById('guest-prof3').innerHTML = speakerDetails[2].guestProfession;
  document.getElementById('guest-career3').innerHTML = speakerDetails[2].careerDetails;
  document.getElementById('guest4').src = speakerDetails[3].guestImage;
  document.getElementById('guest-name4').innerHTML = speakerDetails[3].guestName;
  document.getElementById('guest-prof4').innerHTML = speakerDetails[3].guestProfession;
  document.getElementById('guest-career4').innerHTML = speakerDetails[3].careerDetails;
  document.getElementById('guest5').src = speakerDetails[4].guestImage;
  document.getElementById('guest-name5').innerHTML = speakerDetails[4].guestName;
  document.getElementById('guest-prof5').innerHTML = speakerDetails[4].guestProfession;
  document.getElementById('guest-career5').innerHTML = speakerDetails[4].careerDetails;
  document.getElementById('guest6').src = speakerDetails[5].guestImage;
  document.getElementById('guest-name6').innerHTML = speakerDetails[5].guestName;
  document.getElementById('guest-prof6').innerHTML = speakerDetails[5].guestProfession;
  document.getElementById('guest-career6').innerHTML = speakerDetails[5].careerDetails;
}
window.addEventListener('load', displayInfo);
