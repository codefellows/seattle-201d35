'use strict';

// Element List/ global variables
var clickedOnceCount = 0,
  dontClickCount = 0,
  doubleClickCount = 0,
  mouseOverCount = 0,
  notSuspicousCount = 0;

var clickOnce = document.getElementById('click-once');
var dontClick = document.getElementById('demi');
var doubleClick = document.getElementById('sam');
var mouseOver = document.getElementById('koko');
var notSuspicous = document.getElementById('sadie');


// Adding listeners

clickOnce.addEventListener('click', function () {
  clickedOnceCount ++;
  checkTotalEvents();
  clickOnce.textContent = 'you clicked me' + clickedOnceCount + ' times';
});

dontClick.addEventListener('click', dontClickCountHandler);

doubleClick.addEventListener('dblclick', function() {
  doubleClickCount++;
  checkTotalEvents();
  doubleClick.className = 'red';
});

mouseOver.addEventListener('mouseover', mouseOverHandler);

// Event Handlers

function dontClickCountHandler () {
  dontClickCount++;
  checkTotalEvents();
  alert('hey, you can\'t do that');
}

function mouseOverHandler () {
  mouseOverCount++;
  checkTotalEvents();
  mouseOver.textContent = ' you moused over me so many times, i think about ' + mouseOverCount;
  if(mouseOverCount % 2 === 1){
    mouseOver.className = 'yellow';
  } else {
    mouseOver.className = 'purple';
  }
}

//Helper function

function checkTotalEvents () {
  var totalEvents = clickedOnceCount + dontClickCount + doubleClickCount + mouseOverCount;
  if(totalEvents > 9){
    document.body.innerHTML = '<h1>YOU BROKE IT</h1>';
  }

}

