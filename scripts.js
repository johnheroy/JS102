/**
 * Solutions for JS102 Exercises
 * @author John Heroy (johnheroy@gmail.com)
 */



/**
 * Objects
 */

// Declare an object using literal notation.
var animal = {};

// Assign a property using dot notation.
animal.username = 'Tigger';

// Add a property using bracket notation.
animal['tagline'] = 'Bouncing is what Tiggers do best.';

// Declare an array using literal notation and add to our object.
var noises = [];
animal['noises'] = noises;


/** Loops */

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



/**
 * Arrays
 */

// Declare an array literal with one element.
var noiseArray = ['woof'];

// Use native arrays to add noises to the beginning and end of noiseArray.
noiseArray.unshift('tweet');
noiseArray.push('oink');

noiseArray; // ['tweet', 'woof', 'oink']

// Use bracket notation to add another noise at the end.
noiseArray[3] = 'chirp';

// Inspect the noise array.
noiseArray.length;
noiseArray;

// Assign the noiseArray to the 'noises' property of the animal object.
animal.noises = noiseArray;

// Create an 'animals' collection as an array.
var animals = [];

// Add the 'animal' object created above to 'animals'.
animals.push(animal);

// Create 'quackers' object.
var quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};

// Add the 'quackers' object to the collection using a different method.
animals.unshift(quackers);

// Add two more animal objects to the animals collection.
var garfield = {
  username: 'Garfield',
  tagline: 'It\'s all about me-ow!',
  noises: ['meow', 'purr', 'hiss']
};

var diddy = {
  username: 'Diddy Kong',
  tagline: 'I\'m outta here!',
  noises: ['whoop', 'screech']
};

animals.push(garfield);
animals.push(diddy);
