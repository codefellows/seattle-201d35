'use strict';
// The below is for 1st and Pike

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookieTable = document.getElementById('pats-table');
var allCookiesArray = [];
// var averageCookies = 6.3;
// var cookiesSold = 657;
// var averageCustomers = [];
// var testArray = [];

//constructors always start with capital. Only thing usually
//maxcustomers = ...Parameter helps to differentiate

function CookieStore(minCustomers, maxCustomersParameter, averageCookiesValue) {

  this.minCustomers = minCustomers; // this ia a value ex. 30

  this.maxCustomersProperty = maxCustomersParameter;

  this.averageCookies = averageCookiesValue;

  this.totalCookies = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];

  allCookiesArray.push(this);
}

var teststore = new CookieStore([1, 2, 3], {sam: 'is cool'}, function(){console.log('something');});
console.log(teststore);
// CMD + D to multi select

CookieStore.prototype.populateCustomers = function () {
  for (var i = 0; i < 14; i++) {
    this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers)); //populatecustomers is pushing the array of 14 numbers up into customers per hour []
  }
};

CookieStore.prototype.calculateCookiesPerHour = function () {
  this.populateCustomers();
  for (var i = 0; i < 14; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.averageCookies));
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
  }
};

// ulEl (unordered list, Element)

CookieStore.prototype.render = function () {
  this.calculateCookiesPerHour();
  var ulEl = document.getElementById('firstPike');

  for (var i = 0; i < 14; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies.'; // This says that i moves together with hours and cookies as one unit.
    ulEl.append(liEl);
  }
};

// The below creates tables header and content
// hours.prototype = 'Not a real prototype';
// console.log(hours.prototype);
// console.log(CookieStore.prototype);
CookieStore.prototype.render = function () {
  console.log('im trying to render');


  // create tr
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'defaultName';
  trEl.appendChild(thEl);

  // create td
  var tdEl = document.createElement('td');
  // give td content (Name for an individual cat)
  console.log(this.minCookies);

  tdEl.textContent = this.minCustomers ; //Look at this
  // append the td to the tr
  trEl.appendChild(tdEl);

  // create td
  tdEl = document.createElement('td');
  // give td content (Color for an individual cat)
  tdEl.textContent = this.maxCustomersProperty;
  // append the td to the tr
  trEl.appendChild(tdEl);

  // create td
  tdEl = document.createElement('td');
  // give td content (Tail Size for an individual cat)
  tdEl.textContent = this.averageCookies;
  // append the td to the tr
  trEl.appendChild(tdEl);

  // append the tr to the table
  cookieTable.appendChild(trEl);
};



// Table Row is a container that should now have min, max, average
function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Minimum Customers per Hour';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Maximum Customers per Hour';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Total Customers per Hour';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}




function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function renderallCookiesArray() {
  for (var i in allCookiesArray) {
    allCookiesArray[i].render();
  }
}


//Making new Store instances

var pikePlaceMarket = new CookieStore(10, 30, 6.7);
var samsPlace = new CookieStore(1, 3, 1);
var brooksPlace = new CookieStore(100, 300, 30);

new CookieStore(1,100000, 40);

makeHeaderRow();
renderallCookiesArray();

// down the line think about making an array for all the store objects