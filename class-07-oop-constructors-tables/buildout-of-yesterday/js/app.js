'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pikePlace = {
  name: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalDailyCookieSales: 0
};

pikePlace.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    //calc a random number between min/max and put it into the array
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
}

pikePlace.calcCookiesSoldEachHour = function() {
  pikePlace.calcCustomersEachHour();
  // multiply our random customers by the average cookies per
  for (var i = 0; i < hours.length; i++) {
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
    // console.log(this.totalDailyCookieSales);
  }
}

pikePlace.render = function() {
  pikePlace.calcCookiesSoldEachHour();
  // grab the parent from the DOM
  var ulEl = document.getElementById('pike')
  for (var i = 0; i < hours.length; i++) {
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
      // append the child to the parent
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  ulEl.appendChild(liEl);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

pikePlace.render();