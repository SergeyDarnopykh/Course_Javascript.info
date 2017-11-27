/*
    Is "else" required?
    importance: 4

    The following function returns true if the parameter age is greater than 18.
    Otherwise it asks for a confirmation and returns its result:
*/
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

// Will the function work differently if else is removed?
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// Is there any difference in the behavior of these two variants?

// Answer: No


/*
    Rewrite the function using '?' or '||'
    importance: 4

    The following function returns true if the parameter age is greater than 18.
    Otherwise it asks for a confirmation and returns its result.
*/

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Do you have your parents permission to access this page?');
    }
}
/*
    Rewrite it, to perform the same, but without if, in a single line.
    Make two variants of checkAge:
        Using a question mark operator '?'
        Using OR ||
*/

// Answer:
function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?');
}


/*
    Function min(a, b)
    importance: 1

    Write a function min(a,b) which returns the least of two numbers a and b.

    For instance:
*/
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

// Answer:
function min(a, b) {
    return (a < b) ? a : b;
}


/*
    Function pow(x,n)
    importance: 4

    Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
    Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...*1 = 1
*/

// Answer:
function pow(x, n) {
    let res = 1;

    for (let i = 0; i < n; i++) {
        res *= x;
    }

    return res;
}

const x = prompt('Input x', ''),
    n = prompt('Input n', '');

alert( 'x ^ n: ' + pow(+x, +n) );
