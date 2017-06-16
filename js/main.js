// Our various types of water bottle brands stored in an array
var bottles = [
      'Aquafina','Arrowhead Water', 'Crystal Geyser', 'Dasani', 'Dejà Blue', 'Evian', 'Fiji', 'Glaceau',
      'Mountain Valley Spring Water', 'Nestlé Pure Life', 'Panama Blue', 'Perrier', 'San Pellegrino', 'Sierra Springs',
      'Smart Water', 'VOSS'
      ]

var bottleObjectArray = [
{
      name: 'Fiji',
      image: 'img/fiji.png'
},

{
      name: 'Coke',
      image: 'img/coke.png'
},

{
      name: 'Crystal Geyser',
      image: 'img/crystalgeyser.png'
}
];

// An object constructor is created so we can make more botle objects
function Bottle(name, image) {
  this.name = name;
  this.image = image; 
}

// Creating bottle objects
var aquafinaBottle = new Bottle('Aquafina','img/aquafina.png');
var pepsiCan = new Bottle('Pepsi','img/pepsi.png');
var vossBottle = new Bottle('Voss','img/voss.png');
var evianBottle = new Bottle('Evian','img/evian.png');
var dasaniBottle = new Bottle('Dasani','img/dasani.png');
var arrowheadBottle = new Bottle('Arrowhead','img/arrowhead.png');

bottleObjectArray.push(aquafinaBottle, pepsiCan, vossBottle, evianBottle, dasaniBottle, arrowheadBottle); 

// User generated bottle values will go in this array
var userBottles = [];

// Array of CSS class name animations from animate.css
var animationArray = ['bounce', 'flash', 'pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown',
    'bounceInLeft','bounceInRight','bounceInUp','fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 
    'fadeInRightBig', 'fadeInUp', 'fadeInUpBig','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft',
    'rotateInDownRight','rotateInUpLeft','rotateInUpRight','jackInTheBox','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp',
    'slideInDown','slideInLeft','slideInRight','slideInUp' ];

// Auto complete method
fuzzyAutocomplete($('#bottleInput'), bottles);

// Grab the users input of water bottle name
function getBottles(){
      var userInput = document.getElementById('bottleInput').value;
      userBottles.push(userInput);
      console.log(userInput);

      var bottleArea = document.getElementById('bottle-area');

// We're iterating through our entire bottles array 
      for (var i = 0; bottleObjectArray.length > i; i++){

// Needs a regex error handling expression
            if (userInput.toLowerCase() == bottleObjectArray[i].name.toLowerCase()) {
                  for(var y = 0; bottleObjectArray.length > y; y++) {
                  var createImg = '';
                  var createImg = document.createElement('img');
                  createImg.setAttribute('src', bottleObjectArray[i].image);
                  createImg.setAttribute('width', '65');
                  createImg.setAttribute('height', '65');
                  createImg.setAttribute('id', 'userBottle');

                  var randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];
                  console.log(randomAnimation);

                  createImg.setAttribute('class', 'animated ' + randomAnimation);
                  bottleArea.appendChild(createImg);
                  break;
            }

            var totalUserBottles = 0;
            totalUserBottles = userBottles.length;
            document.getElementById('bottle-number').innerHTML = totalUserBottles;


// I am certain there's an easier way to do this...
            var totalUserMoney = 0;
            totalUserMoney = (userBottles.length * 0.05).toString();
            var totalUserMoneyChar = totalUserMoney.substr(0,4);
            if (totalUserMoneyChar.length == 3) {
                  totalUserMoneyChar = totalUserMoneyChar + '0';
            }
            document.getElementById('cash-number').innerHTML = '$' + totalUserMoneyChar;

            }
      }
};
























