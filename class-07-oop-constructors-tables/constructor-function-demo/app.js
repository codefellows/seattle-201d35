'use strict';

var j = {
  course: '201d35',
  enrolled: true,
  instructors: 'Sam and Nicholas',
  first: 'Juan',
  lastName: 'BetanCourt',
  preferredName: 'J',
  homeTown: 'Seattle',
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
  }
};

// Constructor function syntax

function ConstructorFunctionName (parameter1, parameter2) {
  this.property = parameter1;
  this.property2 = parameter2;
  this.staticPropety1 = 'ExampleString';
  this.method1 = function () {
    console.log('do stuff');
  };
}

//===================================================
// Student Constructor

var allStudents = [];

function Student (firstName, lastName, preferredName, homeTown) {
  this.course = '201d35';
  this.enrolled = true;
  this.instructors = 'Sam and Nicholas';
  this.first = firstName; // this should be a string
  this.lastName = lastName;
  this.preferredName = preferredName;
  this.homeTown = homeTown; // this is the index or id of a hometown
  allStudents.push(this);
};

//==================
//Student Prototypes
//==================

Student.prototype.introduction = function () {
  return 'Hi, my name is ' + this.first + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
};
//syntax for new objects.


// new Students
var tyler = new Student('tyler', 'Pearson', 't-rex', 'Seattle');



var nicholas = new Student('Nicholas', 'Carignan', 'nicholas', 'Seattle');

var luther = new Student('Luther', 'mckieever', 'luther', 'Florida');
var demi = new Student('Demi', 'Hamm', 'Demi-dog or Doggo', 'Outer Space');

for(var i in allStudents){
  console.log(allStudents[i].preferredName + 'is in my class');
}

// console.table(allStudents);

var testArray = ['something', 'else', 'to log'];
// console.table(testArray);
var nameArray = ['dog', 'cat', 'elf', 'sam', 'garfield'];
var joinedArray = [testArray, nameArray];
// console.table(joinedArray);

console.log(joinedArray);

//=================================================================