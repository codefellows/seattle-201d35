'use strict';


//global variables
var allPictures = [];

var imgEl1 = document.getElementById('goat1');
var imgEl2 = document.getElementById('goat2');

// We didn't use these in demo yet
var h2El1 = document.getElementById('goat-1-text');
var h2El2 = document.getElementById('goat-2-text');

var picture1Index = 0;
var picture2Index = 1;

//========================
function Picture (src, name) {
  this.url = src;
  this.name = name;

  this.clicked = 0;

  allPictures.push(this);
}

imgEl1.addEventListener('click', function(){
  allPictures[picture1Index].clicked++;
  chooseNewPictures();
});

imgEl2.addEventListener('click', function() {
  allPictures[picture2Index].clicked++;
  chooseNewPictures();

});


function chooseNewPictures() {
  picture1Index = Math.floor(Math.random() * allPictures.length);
  imgEl1.src = allPictures[picture1Index].url;
  picture2Index = Math.floor(Math.random() * allPictures.length);
  imgEl2.src = allPictures[picture2Index].url;
}



new Picture('images/cruisin-goat.jpg', 'cruisin-goat');
new Picture('images/float-your-goat.jpg', 'float your goat');
new Picture('images/kissing-goat.jpg', 'kissing goat');
new Picture('images/goat-out-of-hand.jpg', 'goat out of hand goat');
new Picture('images/sassy-goat.jpg', 'Allie goat');


chooseNewPictures();