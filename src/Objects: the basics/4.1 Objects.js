/*
    Hello, object
    importance: 5

    Write the code, one line for each action:

    1. Create an empty object user.
    2. Add the property name with the value John.
    3. Add the property surname with the value Smith.
    4. Change the value of the name to Pete.
    5. Remove the property name from the object.
*/

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/*

    Check for emptiness
    importance: 5

    Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
    Should work like that:
*/

let schedule = {};

alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// Answer:
function isEmpty(obj) {
    for (const prop in obj) {
        return false;
    }

    return true;
}


/*
    Constant objects?
    importance: 5

    Is it possible to change an object declared with const, how do you think?
*/

const user = {
    name: "John"
};

// does it work?
user.name = "Pete";

/*
    Yes, it does, because "user" is not the object itself, it's only the reference
    to the address in memory, where it is stored.
    Const in this case only forbids the user to reassign this variable to variable of another type,
    like string.
    user = 'Pete'; // error

    But properties of a const object can be changed without any problems.
*/


/*
    Sum object properties
    importance: 5

    We have an object storing salaries of our team:
*/
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
/*
    Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
    If salaries is empty, then the result must be 0.
*/


let sum = 0;

for (const salary in salaries) {
    sum += salaries[salary];
}

alert(sum);


/*
    Multiply numeric properties by 2
    importance: 3

    Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

    Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
    P.S. Use typeof to check for a number here.
    For instance:
*/

// before the call
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

// Answer:
function multiplyNumeric(obj) {
    for (const prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2;
        }
    }
}
