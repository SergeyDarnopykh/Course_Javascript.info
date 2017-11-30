/*
    Syntax check
    importance: 2

    What is the result of this code?
    P.S. There’s a pitfall :)
*/

let user = {
    name: "John",
    go: function() { alert(this.name) }
}

(user.go)()

/*
    Answer:
    Error, because js does not assume the semicolon after the declaration
    of the user object - the next line starts with parentheses.
*/


/*
    Explain the value of "this"
    importance: 3

    In the code below we intend to call user.go() method 4 times in a row.

    But calls (1) and (2) works differently from (3) and (4). Why?
*/

let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/*
    Answer:
    Because in the examples 3 and 4, operators  "=" and "||" return the method itself,
    when in order for "this" to work, we need  to call "()" on the reference type,
    which is returned after the dot call.
*/


/*
    Using "this" in object literal
    importance: 5

    Here the function makeUser returns an object.
    What is the result of accessing its ref? Why?
*/

function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?

/*
    Answer:
    Error, because "this" in the function in undefined,
    and we just assign the result of this function to "user".
    Therefore "user.ref.name" will give an error, because we can't read
    the properties of an undefined.
*/


/*
    Create a calculator
    importance: 5

    Create an object calculator with three methods:
        read() prompts for two values and saves them as object properties.
        sum() returns the sum of saved values.
        mul() multiplies saved values and returns the result.
*/

const calculator = {
    read() {
        this.value1 = +prompt('Input number 1', '');
        this.value2 = +prompt('Input number 2', '');
    },
    sum() {
        return this.value1 + this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


/*
    Chaining
    importance: 2

    There’s a ladder object that allows to go up and down:
*/

    let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showStep: function() { // shows the current step
            alert( this.step );
        }
    };

// Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// Modify the code of up and down to make the calls chainable, like this:
ladder.up().up().down().showStep(); // 1

// Answer:
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep()
    .up().up().showStep(); // 3
