var foodieApp = angular.module('foodieApp',[]);
console.log(foodieApp);

    $('#myCarousel').carousel({
pause: 'none'
})

//chalo controller bnate hain

foodieApp.controller('mainController',function($scope) {

$scope.restaurants = [{
name: 'Domino Pizza',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Quick Bites',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',
votes:'180',
  reviews:'200',
order:'90mins Rs.20',
image: 'https://miami.eat24hours.com/files/cuisines/v4/italian.jpg'
},


name: 'Farzi cafe',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'modern indian',
cost: '2700',
hours: '12 Noon to 1 AM (Mon-Sun)',
votes:'2237',
  reviews:'1737',
order:'90mins Rs.20',
image: 'https://miami.eat24hours.com/files/cuisines/v4/italian.jpg'
},


name: 'La Piazza',
address: ' First Floor, Hyatt Regency, Ring Road, Bhikaiji Cama Place, Near Fire Station,, New Delhi, Delhi 110066',
location: 'Hyatt Regency Delhi',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Italian',
cost: '25000',
hours: '12–2:30PM, 7–11PM (Mon-Sun)',
votes:'290',
  reviews:'380',
order:'80mins Rs.200',
image: 'https://s-media-cache-ak0.pinimg.com/originals/b9/50/86/b95086c0db742f5437bd53761ee4af65.jpg'
}]
})
