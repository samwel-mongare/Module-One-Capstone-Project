const speakerDetails = [
    {
    guestImage: 'images/image-1.png',
     guestName: 'Wabosha',
     guestProfession: 'Director at Nvidia Corp',
     careerDetails: 'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat aliquam consectetur expedita esse error.'
    },
    {
        guestImage: 'images/image-1.png',
         guestName: 'Wabosha',
         guestProfession: 'Director at Nvidia Corp',
         careerDetails: 'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat aliquam consectetur expedita esse error.'
        },
        {
            guestImage: 'images/image-1.png',
             guestName: 'Wabosha',
             guestProfession: 'Director at Nvidia Corp',
             careerDetails: 'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat aliquam consectetur expedita esse error.'
            },
            {
                guestImage: 'images/image-1.png',
                 guestName: 'Wabosha',
                 guestProfession: 'Director at Nvidia Corp',
                 careerDetails: 'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat aliquam consectetur expedita esse error.'
                },
                {
                    guestImage: 'images/image-1.png',
                     guestName: 'Congoleess',
                     guestProfession: 'Director at Nvidia Corp',
                     careerDetails: 'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat aliquam consectetur expedita esse error.'
                    },
                    {
                        guestImage: 'images/image-1.png',
                         guestName: 'Wabosha',
                         guestProfession: 'Director at Nvidia Corp',
                         careerDetails: 'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat aliquam consectetur expedita esse error.'
                        },
]
  

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

