/*
Working with variables
importance: 2

Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

'use strict';

let admin, name;

name = 'John';
admin = name;
alert(admin);

/*
Giving the right name
importance: 3

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable?
*/

let ourPlanetName, currentUser;

/*
Examine the following code:
    const birthday = '18.04.1982';
    const age = someCode(birthday);

Here we have a constant birthday date and the age is calculated from birthday
with the help of some code (it is not provided for shortness, and because details don’t matter here).
Would it be right to use upper case for birthday? For age? Or even for both?
    const BIRTHDAY = '18.04.1982'; make uppercase?
    const AGE = someCode(BIRTHDAY);  make uppercase?
*/

/*
No in both cases.
In the first case, constant is easy to remember, so there's no reason to make it uppercase.
    - Wrong, it does not matter here. The only thing is matters - do we know the value of the constant before running
    the program. If yes - it should be uppercase, otherwise - camelCase.
In the second case, constant is calculated from some data, so we should use standard camelCase here.
*/

