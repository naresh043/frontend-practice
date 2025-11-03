// --- 1. Basic if statement ---
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015)
  alert('You are right!');


// --- 2. if with a block (recommended style) ---
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}


// --- 3. Boolean conversion examples ---
// Falsy values: 0, "", null, undefined, NaN
if (0) { // won't run
  alert('This will never show');
}

if (1) { // runs, 1 is truthy
  alert('1 is considered true');
}

// Pre-evaluated boolean
let cond = (year == 2015); // true or false
if (cond) {
  alert("Condition is true!");
}


// --- 4. if...else example ---
let year2 = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year2 == 2015) {
  alert('You guessed it right!');
} else {
  alert('How can you be so wrong?');
}


// --- 5. Multiple conditions using else if ---
let year3 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year3 < 2015) {
  alert('Too early...');
} else if (year3 > 2015) {
  alert('Too late');
} else {
  alert('Exactly!');
}


// --- 6. Conditional (ternary) operator ? ---
let age = prompt('How old are you?', '');
let accessAllowed;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);


// --- 7. Shorter version using ? ---
let accessAllowed2 = (age > 18) ? true : false;
alert(accessAllowed2);

// even shorter (comparison already returns true/false)
let accessAllowed3 = age > 18;
alert(accessAllowed3);


// --- 8. Multiple ? operators ---
let age2 = prompt('age?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
  (age2 < 18) ? 'Hello!' :
  (age2 < 100) ? 'Greetings!' :
  'What an unusual age!';

alert(message);

// Equivalent if..else version
if (age2 < 3) {
  message = 'Hi, baby!';
} else if (age2 < 18) {
  message = 'Hello!';
} else if (age2 < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
alert(message);


// --- 9. Non-traditional use of ? (not recommended) ---
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
  alert('Right!') :
  alert('Wrong.');

// Preferred if..else version
if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}




let user=prompt("Enter user name: ")
if(user=="Admin"){
    let password=prompt("Enter password :")
    if(password=="TheMaster"){
        return alert("WEL COME")
    }
    if(password=="Other"){
        return alert("Wrong password")
    }
    if(password=="Canceled"){
      return  alert("Canceled")
    }
    return
}
    if(user=="Other"){
       return alert("idont know")
    }
    if(user=="Cancel"){
      return  alert("Canceled")
    }