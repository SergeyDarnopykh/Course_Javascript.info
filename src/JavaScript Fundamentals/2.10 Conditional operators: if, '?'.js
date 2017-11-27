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

const jsOfficialName = prompt('What is the "official" name of Javascript?', '');

if (jsOfficialName === 'ECMAScript') {
    alert('Right!');
} else {
    alert('didn\'t know? ECMAScript!');
}

/*
    Show the sign
    importance: 2

    Using if..else, write the code which gets a number via prompt and then shows in alert:

        1, if the value is greater than zero,
        -1, if less than zero,
        0, if equals zero.

    In this task we assume that the input is always a number.
*/

const number = +prompt('Input a number', '');

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

/*
    Check the login
    importance: 3

    Write the code which asks for a login with prompt.
    If the visitor enters "Admin", then prompt for a password,
    if the input is an empty line or Esc – show “Canceled.”,
    if it’s another string – then show “I don’t know you”.

    The password is checked as follows:

    If it equals “TheMaster”, then show “Welcome!”,
    Another string – show “Wrong password”,
    For an empty string or cancelled input, show “Canceled.”

    Please use nested if blocks. Mind the overall readability of the code.
*/


