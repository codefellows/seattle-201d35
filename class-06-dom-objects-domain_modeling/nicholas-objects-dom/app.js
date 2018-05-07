'use strict';

var iceCreamStore = {
    flavors: [
        {
        name: 'vanilla',
        ingredients: ['ice', 'cream'],
        sold: 300, 
        renderIceCream: function () {
            console.log(this.sold);
            var list = document.getElementById('ice-cream-list');
            var newLi = document.createElement('li');
            newLi.textContent = this.name;
            list.appendChild(newLi);
            },
        },
        {
        name: 'Rocky Road',
        ingredients: ['ice', 'cream', 'rocks'],
        sold: 3,
        renderIceCream: function () {
            console.log(this.sold);
            var list = document.getElementById('ice-cream-list');
            var newLi = document.createElement('li');
            newLi.textContent = this.name;
            list.appendChild(newLi);
        },
        },
    ],
    peopleVisited: 303,
    renderFlavors: function () {
        for (var i = 0; i < iceCreamStore.flavors.length; i++) {
            iceCreamStore.flavors[i].renderIceCream();
        }
    }
};





