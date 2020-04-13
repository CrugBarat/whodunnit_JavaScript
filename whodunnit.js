//EPISODE 1

//declared/initialized the variable scenario with keyword const
//which is assigned to an object/hash -
//this can be used in any function/block
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

//declared/initialized the variable declareMurderer with keyword const
//which is assigned to the anonymous function
//this can be used in any function/block
const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

//declared/initialized the varibale verdict with keyword const
//which is assigned to the result of the function declareMurderer
//this can be used in any function/block
const verdict = declareMurderer();

//logged the variable to comsole
//Expected result: Miss Scarlet
//Actual result: Miss Scarlet
console.log(verdict);



EPISODE 2

//declared/initialized murderer variable as a const
const murderer = 'Professor Plum';

//therefore cannot be changed here
const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();

//Expected Result: Error
//Expected Result: TypeError: assignement to const variable ln:36
console.log(verdict);



//EPISODE 3

//declared/initialized murderer variable as a let
let murderer = 'Professor Plum';

//allows murderer to be changed using this function
const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
//Expected Result: First Verdict: Mrs. Peacock
//Actual Result: First Verdict: Mrs. Peacock
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
//Expected Result: Second Verdict: Professor Plum
//Actual Result: Second Verdict: Professor Plum
console.log('Second Verdict: ', secondVerdict);


//EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
//Expected Result: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//Actual Result: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
console.log(`Suspect three is ${suspectThree}.`);
//Expected Result: Suspects three is Mrs. Peacock.
//Actual Result: Suspects three is Mrs. Peacock.


// //EPISODE 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();

console.log(verdict);
//Expected Result: The weapon is the Revolver.
//Actual Result: The weapon is the Revolver.


//EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Expected Result: The murderer is Mrs. White.
//Actual Result: The murderer is Mrs. White.


//EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Expected Result: The murderer is Mr. Green.
//Actual Result: The murderer is Mr. Green.


//EPISODE 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//Expected Result: The weapon is Candle Stick
//Actual Result: The weapon is Candle Stick



//EPISODE 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Expected Result: The murderer is Professor Plum.
//Actual Result: The murderer is Professor Plum.
