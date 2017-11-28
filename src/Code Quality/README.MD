# Code Quality

## 3.1 Debugging in Chrome
### Debugger command

We can pause the code by using the debugger command, like this:
```js
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  alert(phrase);
}
```

### Tracing the execution
`pause sign` – enable/disable automatic pause in case of an error.

#### Continue to here

Right click on a line of code opens the context menu with a great option called “Continue to here”.

## 3.5 Automated testing with mocha
### Behaviour Driven Development (BDD)
#### Mocha spec
##### Building blocks
A spec has three main building blocks that you can see above:

- What functionality we’re describing. Uses to group “workers” – the it blocks. <br>
`describe("title", function() { ... })`

- In the title of it we in a human-readable way describe the particular use case, 
and the second argument is a function that tests it. <br>
`it("title", function() { ... })`

- The code inside it block, if the implementation is correct,
should execute without errors. <br>
`assert.equal(value1, value2)`

```js
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
```
##### Subgroups
`desribe` blocks can also be nested to create subgroups of the test:
```js
describe("pow", function() {

  describe("raises x to power n", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added
});
```

##### `before/after` and `beforeEach/afterEach`
We can setup before/after functions that execute before/after running tests,
and also beforeEach/afterEach functions that execute before/after every it.

For instance:
```js
describe("test", function() {
  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));
});
```

The running sequence will be:
```js
Testing started – before all tests (before)
Before a test – enter a test (beforeEach)
1
After a test – exit a test   (afterEach)
Before a test – enter a test (beforeEach)
2
After a test – exit a test   (afterEach)
Testing finished – after all tests (after)
```

Usually, `beforeEach/afterEach` are used to perform initialization,
zero out counters or do something else between the tests (or test groups).

#### Other assertions

- `assert.equal(value1, value2)` – checks the equality value1 == value2.
- `assert.strictEqual(value1, value2)` – checks the strict equality value1 === value2.
- `assert.notEqual`, `assert.notStrictEqual` – inverse checks to the ones above.
- `assert.isTrue(value)` – checks that value === true
- `assert.isFalse(value)` – checks that value === false
