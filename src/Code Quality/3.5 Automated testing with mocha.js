/*
    What's wrong in the test?
    importance: 5

    What’s wrong in the test of pow below?
    P.S. Syntactically the test is correct and passes.
*/

it("Raises x to the power n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

/*
    Answer:
    This test should be divided into 3
*/
