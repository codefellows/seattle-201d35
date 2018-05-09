'use strict';

var allStores = [];

var hours = ['6am', '12pm', '9pm'];

function Store (demi, minimumCust, maximumCustParameter, name) {

  this.averageCookies = demi;
  this.minimumCust = minimumCust;
  this.maximumCust = maximumCustParameter;
  this.name = name;

  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  allStores.push(this);
}


Store.prototype.calcCustomersPerHour = function () {
  for(var i = 0; i < hours.length; i++) {
    //inside this function ctx this is the object its called from
    var newRandom = random(this.minimumCust, this.maximumCust);
    this.customersPerHour.push(newRandom);
  }
};

Store.prototype.calcCookiesPerHour = function () {
  this.calcCustomersPerHour();
  for (var i in hours) {
    //inside this function ctx this is the object its called from
    this.cookiesPerHour.push(this.customersPerHour[i] * this.averageCookies);

    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    // this.totalCookies += this.cookiesPerHour[i];
  }
};

Store.prototype.render = function () {
  this.calcCookiesPerHour();

  var tableEl = document.getElementById('store-storer');
  var newTrEl = document.createElement('tr');
  var newTdEl = document.createElement('td');

  newTdEl.textContent = this.name;
  newTrEl.append(newTdEl);

  for(var i in hours){
    newTdEl = document.createElement('td');
    newTdEl.textContent = this.cookiesPerHour[i];

    newTrEl.append(newTdEl);
  }

  newTdEl = document.createElement('td');
  newTdEl.textContent = this.totalCookies;
  newTrEl.append(newTdEl);

  tableEl.append(newTrEl);
};

function renderAllStores() {
  //set up references
  var tableEl = document.getElementById('store-storer');
  var newTrEl = document.createElement('tr');


  // ============Build Header row ================
  //build location column name
  var storeLocationTdEl = document.createElement('td');
  storeLocationTdEl.textContent = 'Store Location';
  newTrEl.append(storeLocationTdEl);

  for(var j in hours){
    var newTdEl = document.createElement('td');
    newTdEl.textContent = hours[j];

    newTrEl.append(newTdEl);
  }
  var storeTotalTdEl = document.createElement('td');
  storeTotalTdEl.textContent = 'Total';
  newTrEl.append(storeTotalTdEl);

  tableEl.append(newTrEl);
  // ===============End Build header row ================
  for(var i in allStores){
    allStores[i].render();
  }



}

// console.log(pike);

// New Stores
var pike = new Store(7, 30, 70, 'pike');
var nicholas = new Store(7, 30, 70, 'nicholas');
var sara = new Store(7, 30, 70, 'sara');
var tyler = new Store(7, 30, 70, 'tyler');
var jon = new Store(7, 30, 70, 'jon');
// pike.render();

renderAllStores();



// inside the render function this === pike
//========================================
// global functions

function random (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};