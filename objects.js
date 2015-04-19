/* Objects */

// Declare an object using literal notation.
var animal = {};

// Assign a property using dot notation.
animal.username = 'Tigger';

// Add a property using bracket notation.
animal['tagline'] = 'Bouncing is what Tiggers do best.';

// Declare an array using literal notation and add to our object.
var noises = [];
animal['noises'] = noises;


/* Loops */

// Loop through the properties of our animal object.
var count = 0;
for (var property in animal) {
  if (property === 'username') {
    console.log('Hi my name is', animal[property]);
    // return 'Hi my name is' + animal[property]; => ERROR
  }
  if (property === 'tagline') {
    console.log('I like to say "' + animal[property] + '"');
  }
  count++;
}
