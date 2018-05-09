'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>             PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>              create tr
    <th>Name</th>   create a th, give it content, append it to tr
    <th>Color</th>  create a th, give it content, append it to tr
    <th>Tail</th>   create a th, give it content, append it to tr
  </tr>             append tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>
</table>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

Thus, we'll want to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

// We need an array to hold our cats
var allCats = [];

// We need to access the table that is in the DOM
var catTable = document.getElementById('cats');

// We need a constructor to make our cat objects
function Cat(name, color, tailSize) {
  this.name = name;
  this.color = color;
  this.tailSize = tailSize;
  allCats.push(this);
}

// We need to create our Cat instances
new Cat('Buddy', 'Orange and White', 'VERY large');
new Cat('Alistair (R.I.P.)', 'Orange', 'Small');
new Cat('Trillian', 'Black/Orange', 'very small');
new Cat('Meow Mix', 'Black', 'Medium');
new Cat('Toeny', 'Gray', 'Medium-large');
new Cat('Muffins', 'white', 'NO F-ING TAIL WUT')
new Cat('Barnacle', 'gray tabby', 'big and fluffy');

Cat.prototype.render = function() {

  // create tr
  var trEl = document.createElement('tr');

  // create td
  var tdEl = document.createElement('td');
  // give td content (Name for an individual cat)
  tdEl.textContent = this.name;
  // append the td to the tr
  trEl.appendChild(tdEl);

  // create td
  tdEl = document.createElement('td');
  // give td content (Color for an individual cat)
  tdEl.textContent = this.color;
  // append the td to the tr
  trEl.appendChild(tdEl);

  // create td
  tdEl = document.createElement('td');
  // give td content (Tail Size for an individual cat)
  tdEl.textContent = this.tailSize;
  // append the td to the tr
  trEl.appendChild(tdEl);

  // append the tr to the table
  catTable.appendChild(trEl);
}

console.table(allCats);

// We need a separate function to make the table header

function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');

  // create td
  var thEl = document.createElement('th');
  // give th content (Name for an individual cat)
  thEl.textContent = 'Name';
  // append the th to the tr
  trEl.appendChild(thEl);

  // create th
  thEl = document.createElement('th');
  // give th content (Color for an individual cat)
  thEl.textContent = 'Color';
  // append the th to the tr
  trEl.appendChild(thEl);

  // create th
  thEl = document.createElement('th');
  // give th content (Tail Size for an individual cat)
  thEl.textContent = 'Tail Size';
  // append the th to the tr
  trEl.appendChild(thEl);

  // append the tr to the table
  catTable.appendChild(trEl);
}



// It would be nice to have a single function that renders all of the individual cat rows
function renderAllCats() {
  for (var i in allCats) {
    allCats[i].render();
  }
}

makeHeaderRow();
renderAllCats();

// Now we need to call our functions: the one for the header row, and the one for generating the individual cat rows

// Don't forget in the Chrome dev tools to observe the difference between the HTML shown in the Sources tab versus the Elements tab!


function annoy() {
  alert('PLEASE DO NOT LEAVE OUR SITE!!!!');
  annoy();
}

document.getElementById('annoy').addEventListener('mouseover', annoy);