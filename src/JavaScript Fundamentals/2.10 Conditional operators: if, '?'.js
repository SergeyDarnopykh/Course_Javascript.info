'use strict';
/*
  if (a string with zero)
  importance: 5

  Will alert be shown?
*/

if ("0") {
    alert( 'Hello' );
}


/*
 Answer:

 Yes, because non-empty string in javascript is true.
*/




/*
  The name of JavaScript
  importance: 2

  Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

  If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”
*/


// Answer:

const jsOfficialName = prompt('What is the "official" name of Javascript?', '');

if (jsOfficialName === 'ECMAScript') {
    alert('Right!');
} else {
    alert('didn\'t know? ECMAScript!');
}
