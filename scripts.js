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



/**
 * Functions
 */

// Questions 1 & 2
var AnimalTestUser = function(username) {
  var animal = {
    username: username
  };

  if (arguments.length > 1) {
    var otherArgs = [];
    for (var i = 1; i < arguments.length; i++) {
      otherArgs.push(arguments[i]);
    }
    animal.otherArgs = otherArgs;
  }

  return animal;
};

// Question 3
var AnimalCreator = function(username, species, noises, tagline) {
  var animal = {
    username: username,
    species: species,
    noises: noises,
    tagline: tagline,
    friends: []
  };
  return animal;
};

// Questions 4 & 5
var addFriend = function(animal, friend) {
  // animal.friends.push(friend);
  animal.friends.push(friend.username);
};

// Question 6
var myFarm = [];

// Create three animals.
var cloud = AnimalCreator('Cloud', 'sheep', 'You can count on me!',
  ['baahhh', 'arrgg', 'chewchewchew']);
var zeny = AnimalCreator('Zeny', 'cow', 'I\'m the one for you!',
  ['moo', 'moooooo', 'moomoo']);
var moo = AnimalCreator('Moo', 'pig', 'Indulging myself every day',
  ['oink', 'oinkoink', 'snort']);

// Make some friends!
addFriend(cloud, zeny);
addFriend(cloud, moo);
addFriend(zeny, moo);
addFriend(moo, zeny);

// Add them to the farm.
myFarm.push(cloud);
myFarm.push(zeny);
myFarm.push(moo);

// Question 7
var addMatchesArray = function(farm) {
  for (var i = 0; i < farm.length; i++) {
    var animal = farm[i];
    animal.matches = [];
  }
};

addMatchesArray(myFarm);

// Question 8
var giveMatches = function(farm) {
  for (var i = 0; i < farm.length; i++) {
    var animal = farm[i];
    if (animal.friends.length > 0) {
      animal.matches.push(animal.friends[0]);
    }
  }
};

giveMatches(myFarm);



/**
 * Nesting Data
 */

var friends = [];

friends.push(animals[0].username, animals[1].username);

var relationships = {};

relationships.friends = friends;
// Object.keys(relationships).length => 1


var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');


for (var i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships;
}
