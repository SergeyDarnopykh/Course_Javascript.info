/*
    What's the result of OR?
    importance: 5

    What the code below is going to output?
*/
    alert( null || 2 || undefined );

/*
    Answer:
    2, because operator || returns first true value or the last one.
*/


/*
    What's the result of OR'ed alerts?
    importance: 3

    What the code below will output?
*/
    alert( alert(1) || 2 || alert(3) );


/*
    Answer:
    1 and 2, because operator || returns first true value or the last one,
    and alert does not return any value.
*/


/*
    What is the result of AND?
    importance: 5

    What this code is going to show?
*/
    alert( 1 && null && 2 );


/*
    Answer:
    null, because operator && returns first false value or the last one.
*/


/*
    What is the result of AND'ed alerts?
    importance: 3

    What will this code show?
*/
    alert( alert(1) && alert(2) );

/*
    Answer:
    1 and then undefined, because operator && returns first false value or the last one.
*/


/*
    The result of OR AND OR
    importance: 5

    What will be the result?
*/
    alert( null || 2 && 3 || 4 );

/*
    Answer:
    3, because operator && returns first false value or the last one and
    operator || returns first true value or the last one.
*/


/*
    Check the range between
    importance: 3

    Write an “if” condition to check that age is between 14 and 90 inclusively.

    “Inclusively” means that age can reach the edges 14 or 90.
*/

if (age >= 14 && age <= 90) {
    // ...
}


/*
    Check the range outside
    importance: 3

    Write an if condition to check that age is NOT between 14 and 90 inclusively.

    Create two variants: the first one using NOT !, the second one – without it.
*/


if (!(age >= 14 && age <= 90)) {
    // ...
}

if (age < 14 || age > 90) {
    // ...
}


/*
    A question about "if"
    importance: 5

    Which of these alerts are going to execute?

    What will be the results of the expressions inside if(...)?
*/
/* 1 */    if (-1 || 0) alert( 'first' );
/* 2 */    if (-1 && 0) alert( 'second' );
/* 3 */    if (null || -1 && 1) alert( 'third' );


/*
    Answer:
    1, 3, because operator && returns first false value or the last one and
    operator || returns first true value or the last one.
*/




